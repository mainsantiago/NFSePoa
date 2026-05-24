import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DpsCsvParserService } from '../../../../core/services/dps-csv-parser.service';
import { SoapNfseService } from '../../../../core/services/soap-nfse.service';
import type { CsvDps, DpsProcessItem, DpsProcessStatus } from '../../../../core/models';

type PageStep = 'upload' | 'processando' | 'concluido';

/** Cabeçalhos do modelo CSV — simplificado Poá/SP, Simples Nacional */
const CSV_TEMPLATE_HEADERS = [
  'codigo_usuario', 'codigo_contribuinte',
  'ano', 'mes', 'cpf_cnpj_prestador',
  'tipo_trib', 'alq_iss_sn', 'reg_ap_trib_sn',
  'num_rps', 'ser_rps', 'dt_emi',
  'ret_fonte', 'cod_srv', 'discr_srv',
  'vl_nfs', 'alq_iss',
  'cpf_cnpj_tom', 'raz_soc_tom',
  'log_tom', 'num_end_tom', 'bairro_tom',
  'mun_tom', 'sigla_uf_tom', 'cep_tom', 'email_tom',
  'srv_ctn', 'srv_nbs', 'cnae', 'anexo_sn',
  'rtc_ind_cod_ope', 'rtc_cst_ibs_cbs', 'rtc_cclass_trib',
];

const CSV_TEMPLATE_DESC = [
  'Código do Usuário (Editar Perfil no sistema)',
  'Código do Contribuinte (Consulta do Contribuinte)',
  'Ano competência (4 dígitos)',
  'Mês competência (1 a 12)',
  'CPF/CNPJ do prestador (com zeros à esquerda)',
  'Tipo tributação: 1=Tributado, 4=Simples Nacional, etc.',
  'Alíquota ISS do Simples Nacional (obrigatório se tipo_trib=4)',
  'Regime apuração SN: 1=SS pelo SN, 2=Federal SN + ISS NFSE, 3=Pela NFSe (obrigatório se tipo_trib=4)',
  'Número sequencial do DPS',
  'Série do DPS (opcional)',
  'Data emissão DPS (dd/mm/aaaa)',
  'ISS retido pelo tomador? SIM ou NAO',
  'Código do serviço (formato prefeitura, ex: 08.01)',
  'Discriminação do serviço prestado',
  'Valor da nota/serviço',
  'Alíquota ISS (%)',
  'CPF/CNPJ do tomador (ou CONSUMIDOR/EXTERIOR)',
  'Razão social do tomador',
  'Logradouro completo do tomador',
  'Número endereço do tomador',
  'Bairro do tomador',
  'Município do tomador (nome ou [IBGE]9999999)',
  'UF do tomador (ex: SP)',
  'CEP do tomador (8 dígitos)',
  'Email do tomador (opcional)',
  'Código de Tributação Nacional (9 dígitos, sem pontuação)',
  'Código NBS (9 dígitos, sem pontuação)',
  'Código CNAE (7 dígitos, sem pontuação, ex: 8511200)',
  'Anexo do Simples Nacional (ex: III)',
  'Código operação RTC (6 dígitos — anexo VII)',
  'CST IBS/CBS (3 dígitos)',
  'Classificação Tributária (6 dígitos)',
];

const CSV_TEMPLATE_EXAMPLE = [
  'SEU_CODIGO_USUARIO', 'CODIGO_CONTRIBUINTE',
  '2026', '4', '00000000000100',
  '4', '3.25', '1',
  '1', 'A1', '01/04/2026',
  'NAO', '08.01', 'Ensino Regular pré-escolar, fundamental, médio e superior',
  '1000.00', '3.25',
  '00000000000100', 'Razão Social do Tomador',
  'Rua Exemplo', '100', 'Centro',
  'POA', 'SP', '08550000', 'email@exemplo.com',
  '080101000', '122011900', '8511200', 'III',
  '030101', '01', '200028',
];

@Component({
  selector: 'app-emissao-nfse',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatButtonModule, MatIconModule, MatTableModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatChipsModule,
    MatTooltipModule,
  ],
  templateUrl: './emissao-nfse.html',
  styleUrl: './emissao-nfse.scss'
})
export class EmissaoNfseComponent {
  step = signal<PageStep>('upload');
  dragOver = signal(false);
  csvFile = signal<File | null>(null);
  csvErrors = signal<string[]>([]);
  parsedRows = signal<CsvDps[]>([]);
  processItems = signal<DpsProcessItem[]>([]);
  processing = signal(false);

  displayedColumns = ['linha', 'tomador', 'numRps', 'codSrv', 'valor', 'status', 'mensagem'];

  totalLinhas = computed(() => this.processItems().length);
  totalSucesso = computed(() => this.processItems().filter(i => i.status === 'sucesso').length);
  totalErro = computed(() => this.processItems().filter(i => i.status === 'erro').length);
  totalPendente = computed(() => this.processItems().filter(i => i.status === 'pendente' || i.status === 'processando').length);
  totalDps = computed(() => this.parsedRows().length);
  totalValor = computed(() => this.parsedRows().reduce((sum, r) => sum + (r.vlNfs || 0), 0));

  constructor(
    private csvParser: DpsCsvParserService,
    private soapService: SoapNfseService
  ) {}

  // --- Download modelo CSV ---
  downloadModelo(): void {
    const sep = ';';
    const header = CSV_TEMPLATE_HEADERS.join(sep);
    const desc = CSV_TEMPLATE_DESC.join(sep);
    const example = CSV_TEMPLATE_EXAMPLE.join(sep);
    const csv = [header, desc, example].join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    this.triggerDownload(blob, 'modelo_emissao_nfse_dps.csv');
  }

  // --- Drag & Drop ---
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver.set(false);
    const files = event.dataTransfer?.files;
    if (files?.length) this.handleFile(files[0]);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) this.handleFile(input.files[0]);
  }

  async handleFile(file: File): Promise<void> {
    if (!file.name.toLowerCase().endsWith('.csv')) {
      this.csvErrors.set(['Apenas arquivos .csv são aceitos.']);
      return;
    }

    this.csvFile.set(file);
    this.csvErrors.set([]);

    const { data, errors } = await this.csvParser.parse(file);

    if (errors.length > 0) {
      this.csvErrors.set(errors);
      if (data.length === 0) return;
    }

    this.parsedRows.set(data);

    const items: DpsProcessItem[] = data.map(row => ({
      linha: row.linha,
      numRps: row.numRps,
      razSocTom: row.razSocTom || '—',
      cpfCnpjTom: row.cpfCnpjTom || '—',
      vlNfs: row.vlNfs || 0,
      codSrv: row.codSrv || '—',
      status: 'pendente' as DpsProcessStatus,
      mensagem: 'Aguardando envio',
    }));
    this.processItems.set(items);
  }

  // --- Processamento ---
  iniciarProcessamento(): void {
    const rows = this.parsedRows();
    if (rows.length === 0) return;

    this.processing.set(true);
    this.step.set('processando');
    this.updateAllStatus('processando', 'Enviando lote de DPS...');

    this.soapService.enviarLoteDps(rows).subscribe({
      next: (response) => {
        if (response.retorno) {
          this.updateAllStatus('sucesso', `Protocolo: ${response.protocolo}`);
        } else {
          // Mapear erros por linha
          const items = this.processItems();
          const updated = items.map(item => {
            const msg = response.messages.find(m => m.linErr === item.linha);
            if (msg) {
              return { ...item, status: 'erro' as DpsProcessStatus, mensagem: msg.description };
            }
            // Se não tem erro específico, verificar mensagens globais
            const globalMsg = response.messages.find(m => m.linErr === 0);
            return {
              ...item,
              status: 'erro' as DpsProcessStatus,
              mensagem: globalMsg?.description || 'Lote rejeitado pelo WebService'
            };
          });
          this.processItems.set(updated);
        }
        this.processing.set(false);
        this.step.set('concluido');
      },
      error: (err) => {
        this.updateAllStatus('erro', err.error?.message || 'Erro ao enviar lote de DPS');
        this.processing.set(false);
        this.step.set('concluido');
      }
    });
  }

  exportarResultados(): void {
    const items = this.processItems();
    const header = 'Linha;Num DPS;Tomador;CPF/CNPJ Tom;Serviço;Valor;Status;Mensagem';
    const rows = items.map(i =>
      `${i.linha};${i.numRps};${i.razSocTom};${i.cpfCnpjTom};${i.codSrv};${i.vlNfs};${i.status};${i.mensagem}`
    );
    const csv = [header, ...rows].join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    this.triggerDownload(blob, 'Resultado_NFS-e_DPS.csv');
  }

  novaEmissao(): void {
    this.step.set('upload');
    this.csvFile.set(null);
    this.csvErrors.set([]);
    this.parsedRows.set([]);
    this.processItems.set([]);
    this.processing.set(false);
  }

  // --- Helpers ---
  getStatusIcon(status: DpsProcessStatus): string {
    switch (status) {
      case 'pendente': return 'schedule';
      case 'processando': return 'sync';
      case 'sucesso': return 'check_circle';
      case 'erro': return 'error';
    }
  }

  getStatusClass(status: DpsProcessStatus): string {
    return `status-${status}`;
  }

  private updateAllStatus(status: DpsProcessStatus, msg: string): void {
    this.processItems.update(items =>
      items.map(i => ({ ...i, status, mensagem: msg }))
    );
  }

  private triggerDownload(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
