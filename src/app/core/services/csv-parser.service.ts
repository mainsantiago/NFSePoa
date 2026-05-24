import { Injectable } from '@angular/core';
import type { CsvDeclaracao } from '../models';

/** Cabeçalhos esperados no CSV (case-insensitive, sem acentos) */
const HEADERS_MAP: Record<string, keyof CsvDeclaracao> = {
  // Autenticação / Configuração (por linha)
  'prefeitura': 'prefeitura',
  'codigo_usuario': 'codigoUsuario',
  'codigo_contribuinte': 'codigoContribuinte',
  'ano': 'ano',
  'mes': 'mes',
  'cpf_responsavel': 'cpfResponsavel',
  'nome_responsavel': 'nomeResponsavel',
  'email_responsavel': 'emailResponsavel',
  'possui_servicos_prestados': 'possuiServicosPrestados',
  'possui_servicos_tomados': 'possuiServicosTomados',
  // Identificação do cliente (agrupamento)
  'cliente_nome': 'clienteNome',
  // Operação
  'operacao_nota': 'operacaoNota',
  // Dados da Nota
  'data_emissao': 'dataEmissao',
  'data_prestacao_servico': 'dataPrestacaoServico',
  'tipo_nf': 'tipoNf',
  'serie': 'serie',
  'numero': 'numero',
  'situacao': 'situacao',
  'rps_serie': 'rpsSerie',
  'rps_numero': 'rpsNumero',
  // Dados do Prestador
  'tipo_pessoa': 'tipoPessoa',
  'cpf_cnpj_prestador': 'cpfCnpjPrestador',
  'razao_social_prestador': 'razaoSocialPrestador',
  'inscricao_municipal_prestador': 'inscricaoMunicipalPrestador',
  'cep_prestador': 'cepPrestador',
  'municipio_prestador': 'municipioPrestador',
  'uf_prestador': 'ufPrestador',
  'logradouro_prestador': 'logradouroPrestador',
  'numero_endereco_prestador': 'numeroEnderecoPrestador',
  'complemento_endereco_prestador': 'complementoEnderecoPrestador',
  'bairro_prestador': 'bairroPrestador',
  // Local de Prestação
  'municipio_prestacao': 'municipioPrestacao',
  'uf_prestacao': 'ufPrestacao',
  // Serviço
  'codigo_servico': 'codigoServico',
  'discriminacao': 'discriminacao',
  'valor_nota': 'valorNota',
  'valor_deducao': 'valorDeducao',
  'base_calculo': 'baseCalculo',
  'aliq_iss': 'aliqIss',
  'iss_devido': 'issDevido',
  'iss_retido': 'issRetido',
  'observacao': 'observacao',
};

const NUMERIC_FIELDS = new Set<string>([
  'ano', 'mes',
  'numero', 'situacao', 'rpsNumero',

  'valorNota', 'valorDeducao', 'baseCalculo',
  'aliqIss', 'issDevido', 'issRetido',
]);

/** Prefeitura fixa — Poá/SP */
const PREFEITURA_FIXA = 'sp.poa';

@Injectable({ providedIn: 'root' })
export class CsvParserService {

  async parse(file: File): Promise<{ data: CsvDeclaracao[]; errors: string[] }> {
    const text = await file.text();
    const errors: string[] = [];
    const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);

    if (lines.length < 2) {
      return { data: [], errors: ['O arquivo CSV deve conter cabeçalho + pelo menos 1 linha de dados.'] };
    }

    const separator = this.detectSeparator(lines[0]);
    const rawHeaders = this.splitLine(lines[0], separator);
    const headerMapping = this.mapHeaders(rawHeaders, errors);

    const data: CsvDeclaracao[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = this.splitLine(lines[i], separator);

      // Pula linhas de descrição / exemplo vindas do modelo CSV
      if (this.isTemplateRow(values)) continue;

      const row = this.buildRow(i, values, headerMapping, rawHeaders.length, errors);
      if (row) data.push(row);
    }

    return { data, errors };
  }

  private detectSeparator(headerLine: string): string {
    const semicolons = (headerLine.match(/;/g) || []).length;
    const commas = (headerLine.match(/,/g) || []).length;
    return semicolons >= commas ? ';' : ',';
  }

  /** Identifica linhas de descrição ou exemplo do modelo CSV e as ignora */
  private isTemplateRow(values: string[]): boolean {
    const first = (values[0] || '').trim().toLowerCase();
    // Linha de descrição: primeira célula começa com "Código"
    if (first.startsWith('codigo do') || first.startsWith('c\u00f3digo do')) return true;
    // Linha de exemplo: primeira célula é o placeholder do modelo
    if (first === 'seu_codigo_usuario') return true;
    return false;
  }

  private splitLine(line: string, sep: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === sep && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  }

  private normalize(header: string): string {
    return header
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9_]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
  }

  /** Converte CPF/CNPJ em notação científica (ex: 4,27482E+13) de volta para string numérica */
  private fixScientificCpfCnpj(value: string): string {
    if (/[eE][+\-]?\d+/.test(value)) {
      const num = parseFloat(value.replace(',', '.'));
      if (!isNaN(num)) {
        const str = num.toFixed(0);
        return str.length <= 11 ? str.padStart(11, '0') : str.padStart(14, '0');
      }
    }
    return value;
  }

  private mapHeaders(rawHeaders: string[], errors: string[]): Map<number, keyof CsvDeclaracao> {
    const mapping = new Map<number, keyof CsvDeclaracao>();
    const found = new Set<string>();

    rawHeaders.forEach((h, idx) => {
      const normalized = this.normalize(h);
      const mapped = HEADERS_MAP[normalized];
      if (mapped) {
        mapping.set(idx, mapped);
        found.add(normalized);
      }
    });

    const required = [
      'codigo_usuario', 'codigo_contribuinte',
      'ano', 'mes', 'cpf_responsavel', 'nome_responsavel', 'email_responsavel',
      'cliente_nome',
      'data_emissao', 'data_prestacao_servico',
      'tipo_nf',
      'tipo_pessoa', 'cpf_cnpj_prestador', 'razao_social_prestador',
      'municipio_prestacao', 'uf_prestacao', 'codigo_servico',
      'valor_nota', 'aliq_iss',
    ];
    for (const r of required) {
      if (!found.has(r)) {
        errors.push(`Coluna obrigatória não encontrada: "${r}"`);
      }
    }

    return mapping;
  }

  private buildRow(
    lineNum: number,
    values: string[],
    mapping: Map<number, keyof CsvDeclaracao>,
    expectedCols: number,
    errors: string[]
  ): CsvDeclaracao | null {
    if (values.length < expectedCols * 0.5) {
      errors.push(`Linha ${lineNum + 1}: número de colunas insuficiente (${values.length}).`);
      return null;
    }

    const row: any = { linha: lineNum };

    mapping.forEach((field, colIdx) => {
      const raw = colIdx < values.length ? values[colIdx] : '';
      if (NUMERIC_FIELDS.has(field)) {
        const num = parseFloat(raw.replace(',', '.'));
        row[field] = isNaN(num) ? 0 : num;
      } else {
        row[field] = raw;
      }
    });

    // Corrigir CPF/CNPJ em notação científica (Excel)
    row.cpfCnpjPrestador = this.fixScientificCpfCnpj(row.cpfCnpjPrestador || '');

    // Defaults
    row.prefeitura = PREFEITURA_FIXA;
    if (!row.operacaoNota) row.operacaoNota = 'I';
    if (!row.situacao) row.situacao = 1;
    if (!row.possuiServicosTomados) row.possuiServicosTomados = 'SIM';
    if (!row.possuiServicosPrestados) row.possuiServicosPrestados = 'NAO';
    if (!row.clienteNome) row.clienteNome = row.razaoSocialPrestador || 'Sem_Cliente';

    // Auto-cálculo
    if (!row.valorDeducao) row.valorDeducao = 0;
    row.baseCalculo = (row.valorNota || 0) - (row.valorDeducao || 0);
    if (!row.issRetido) row.issRetido = 0;
    if (!row.issDevido && row.issRetido === 0) {
      row.issDevido = row.baseCalculo * (row.aliqIss || 0) / 100;
    }
    if (!row.issDevido) row.issDevido = 0;

    return row as CsvDeclaracao;
  }
}
