/* ============================================================
   Modelos do WebService de Declarações de Serviços Tomados
   (eTransparência — aws_dcl.aspx)
   ============================================================ */

/** Representa uma linha do CSV já parseada — TODOS os dados por linha */
export interface CsvDeclaracao {
  linha: number;

  // ── Autenticação / Configuração (por linha) ──
  prefeitura: string;            // ex: mg.varginha, sp.barrabonita
  codigoUsuario: string;
  codigoContribuinte: string;
  ano: number;
  mes: number;
  cpfResponsavel: string;
  nomeResponsavel: string;
  emailResponsavel: string;
  possuiServicosPrestados: string; // SIM | NAO
  possuiServicosTomados: string;   // SIM | NAO

  // ── Identificação do cliente (agrupamento / nome amigável) ──
  clienteNome: string;

  // ── Operação sobre a nota ──
  operacaoNota: string; // I = Inclusão, A = Alteração, E = Exclusão

  // ── Dados da Nota ──
  dataEmissao: string;           // dd/mm/yyyy
  dataPrestacaoServico: string;  // dd/mm/yyyy
  tipoNf: string;                // NFS, NFSS, CUPOM, RECIBO, RPA, NFSEO, etc.
  serie: string;
  numero: number;
  situacao: number;              // 1=Normal 2=Cancelada 3=Extraviada 4=Devolução 5=NãoTributada
  rpsSerie: string;
  rpsNumero: number;

  // ── Dados do Prestador ──
  tipoPessoa: string;            // F = Física, J = Jurídica, E = Exterior
  cpfCnpjPrestador: string;
  razaoSocialPrestador: string;
  inscricaoMunicipalPrestador: string;
  cepPrestador: string;
  municipioPrestador: string;
  ufPrestador: string;
  logradouroPrestador: string;
  numeroEnderecoPrestador: string;
  complementoEnderecoPrestador: string;
  bairroPrestador: string;

  // ── Local de Prestação ──
  municipioPrestacao: string;
  ufPrestacao: string;

  // ── Serviço ──
  codigoServico: string;
  discriminacao: string;
  valorNota: number;
  valorDeducao: number;
  baseCalculo: number;
  aliqIss: number;
  issDevido: number;
  issRetido: number;
  observacao: string;
}

export type ProcessStatus = 'pendente' | 'processando' | 'sucesso' | 'erro';

/** Estado de processamento de cada nota na tabela da UI */
export interface NotaProcessItem {
  linha: number;
  clienteNome: string;
  codigoContribuinte: string;
  cpfCnpjPrestador: string;
  razaoSocialPrestador: string;
  valorNota: number;
  status: ProcessStatus;
  mensagem: string;
}

/** Resultado por cliente retornado pela API */
export interface ClienteResultado {
  clienteNome: string;
  codigoContribuinte: string;
  movimentoProtocolo: string;
  movimentoStatus: string;
  declaracaoProtocolo: string;
  declaracaoStatus: string;
  mensagens: { identificadorNota: number; mensagem: string }[];
}

/** Resposta da API ao processar o lote completo */
export interface LoteResponse {
  totalProcessadas: number;
  totalSucesso: number;
  totalErro: number;
  resultados: ClienteResultado[];
}
