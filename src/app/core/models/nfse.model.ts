/* ============================================================
   Modelos do WebService NFS-e — Emissão via DPS
   (eTransparência — aws_nfe.aspx / PROCESSARPS)
   ============================================================ */

/** Representa uma linha do CSV de DPS já parseada */
export interface CsvDps {
  linha: number;

  // ── Login ──
  codigoUsuario: string;
  codigoContribuinte: string;

  // ── Cabeçalho SDTRPS ──
  ano: number;
  mes: number;
  cpfCnpjPrestador: string;      // CPFCNPJ do prestador (14 dígitos)
  tipoTrib: number;              // 1=Tributado, 4=Simples Nacional, etc.
  alqIssSN: number;              // Alíquota ISS Simples Nacional (quando tipoTrib=4)
  regApTribSN: number;           // Regime apuração SN (1,2,3) — quando tipoTrib=4

  // ── DPS (Reg20Item) ──
  numRps: number;                // Sequencial DPS
  serRps: string;                // Série DPS
  dtEmi: string;                 // dd/mm/aaaa
  retFonte: string;              // SIM ou NAO
  codSrv: string;                // Código do serviço (formato prefeitura, ex: 01.02)
  discrSrv: string;              // Discriminação do serviço
  vlNfs: number;                 // Valor da nota
  vlDed: number;                 // Valor dedução
  vlBasCalc: number;             // Base de cálculo (auto-calc se não informado)
  alqIss: number;                // Alíquota ISS
  vlIss: number;                 // ISS devido (quando retFonte=NAO)
  vlIssRet: number;              // ISS retido (quando retFonte=SIM)

  // ── Tomador ──
  cpfCnpjTom: string;            // CPF/CNPJ do tomador
  razSocTom: string;             // Razão social do tomador
  logTom: string;                // Logradouro do tomador
  numEndTom: string;             // Número endereço tomador
  bairroTom: string;             // Bairro tomador
  munTom: string;                // Município tomador (nome ou [IBGE]9999999)
  siglaUfTom: string;            // UF tomador
  cepTom: string;                // CEP tomador
  emailTom: string;              // Email tomador (opcional)

  // ── Campos adicionais obrigatórios v4.00 (Reg40) ──
  srvCtn: string;                // Código de Tributação Nacional (9 dígitos)
  srvNbs: string;                // Código NBS (9 dígitos)
  cnae: string;                  // Código CNAE (7 dígitos, sem pontuação)
  anexoSn: string;               // Número do Anexo do Simples Nacional (ex: III)

  // ── Reg60_RTC (Reforma Tributária) ──
  rtcIndCodOpe: string;          // Código operação (6 dígitos)
  rtcCstIbsCbs: string;          // CST IBS/CBS (3 dígitos)
  rtcCClassTrib: string;         // Classificação Tributária (6 dígitos)
}

export type DpsProcessStatus = 'pendente' | 'processando' | 'sucesso' | 'erro';

export interface DpsProcessItem {
  linha: number;
  numRps: number;
  razSocTom: string;
  cpfCnpjTom: string;
  vlNfs: number;
  codSrv: string;
  status: DpsProcessStatus;
  mensagem: string;
}

export interface DpsLoteResponse {
  retorno: boolean;
  protocolo: string;
  messages: { id: string; type: number; description: string; linErr: number }[];
}
