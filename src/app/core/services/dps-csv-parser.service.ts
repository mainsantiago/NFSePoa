import { Injectable } from '@angular/core';
import type { CsvDps } from '../models';

/** Cabeçalhos esperados no CSV de DPS (case-insensitive, sem acentos) */
const HEADERS_MAP: Record<string, keyof CsvDps> = {
  // Login
  'codigo_usuario': 'codigoUsuario',
  'codigo_contribuinte': 'codigoContribuinte',
  // Cabeçalho
  'ano': 'ano',
  'mes': 'mes',
  'cpf_cnpj_prestador': 'cpfCnpjPrestador',
  'tipo_trib': 'tipoTrib',
  'alq_iss_sn': 'alqIssSN',
  'reg_ap_trib_sn': 'regApTribSN',
  // DPS
  'num_rps': 'numRps',
  'ser_rps': 'serRps',
  'dt_emi': 'dtEmi',
  'ret_fonte': 'retFonte',
  'cod_srv': 'codSrv',
  'discr_srv': 'discrSrv',
  'vl_nfs': 'vlNfs',
  'vl_ded': 'vlDed',
  'vl_bas_calc': 'vlBasCalc',
  'alq_iss': 'alqIss',
  'vl_iss': 'vlIss',
  'vl_iss_ret': 'vlIssRet',
  // Tomador
  'cpf_cnpj_tom': 'cpfCnpjTom',
  'raz_soc_tom': 'razSocTom',
  'log_tom': 'logTom',
  'num_end_tom': 'numEndTom',
  'bairro_tom': 'bairroTom',
  'mun_tom': 'munTom',
  'sigla_uf_tom': 'siglaUfTom',
  'cep_tom': 'cepTom',
  'email_tom': 'emailTom',
  // Campos adicionais v4
  'srv_ctn': 'srvCtn',
  'srv_nbs': 'srvNbs',
  'cnae': 'cnae',
  'anexo_sn': 'anexoSn',
  // RTC
  'rtc_ind_cod_ope': 'rtcIndCodOpe',
  'rtc_cst_ibs_cbs': 'rtcCstIbsCbs',
  'rtc_cclass_trib': 'rtcCClassTrib',
};

const NUMERIC_FIELDS = new Set<string>([
  'ano', 'mes', 'tipoTrib', 'alqIssSN', 'regApTribSN',
  'numRps',
  'vlNfs', 'vlDed', 'vlBasCalc', 'alqIss', 'vlIss', 'vlIssRet',
]);

/** Prefeitura fixa — Poá/SP */
const PREFEITURA_FIXA = 'sp.poa';

@Injectable({ providedIn: 'root' })
export class DpsCsvParserService {

  /** Prefeitura usada para montar a URL do WebService */
  get prefeitura(): string { return PREFEITURA_FIXA; }

  async parse(file: File): Promise<{ data: CsvDps[]; errors: string[] }> {
    const text = await file.text();
    const errors: string[] = [];
    const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);

    if (lines.length < 2) {
      return { data: [], errors: ['O arquivo CSV deve conter cabeçalho + pelo menos 1 linha de dados.'] };
    }

    const separator = this.detectSeparator(lines[0]);
    const rawHeaders = this.splitLine(lines[0], separator);
    const headerMapping = this.mapHeaders(rawHeaders, errors);

    const data: CsvDps[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = this.splitLine(lines[i], separator);
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

  private isTemplateRow(values: string[]): boolean {
    const first = (values[0] || '').trim().toLowerCase();
    if (first.startsWith('codigo do') || first.startsWith('c\u00f3digo do')) return true;
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

  private mapHeaders(rawHeaders: string[], errors: string[]): Map<number, keyof CsvDps> {
    const mapping = new Map<number, keyof CsvDps>();
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
      'ano', 'mes', 'cpf_cnpj_prestador', 'tipo_trib',
      'num_rps', 'dt_emi', 'cod_srv', 'discr_srv',
      'vl_nfs', 'alq_iss',
      'cpf_cnpj_tom', 'raz_soc_tom',
      'log_tom', 'num_end_tom', 'bairro_tom', 'mun_tom', 'sigla_uf_tom', 'cep_tom',
      'srv_ctn', 'srv_nbs',
      'rtc_ind_cod_ope', 'rtc_cst_ibs_cbs', 'rtc_cclass_trib',
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
    mapping: Map<number, keyof CsvDps>,
    expectedCols: number,
    errors: string[]
  ): CsvDps | null {
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
    row.cpfCnpjTom = this.fixScientificCpfCnpj(row.cpfCnpjTom || '');

    // Defaults
    if (!row.retFonte) row.retFonte = 'NAO';
    if (!row.vlDed) row.vlDed = 0;
    if (!row.vlBasCalc) row.vlBasCalc = (row.vlNfs || 0) - (row.vlDed || 0);
    if (!row.vlIssRet) row.vlIssRet = 0;
    if (!row.vlIss && row.retFonte === 'NAO') {
      row.vlIss = row.vlBasCalc * (row.alqIss || 0) / 100;
    }
    if (!row.vlIss) row.vlIss = 0;
    if (!row.serRps) row.serRps = '';
    if (!row.emailTom) row.emailTom = '';
    if (!row.alqIssSN) row.alqIssSN = 0;
    if (!row.regApTribSN) row.regApTribSN = 0;

    return row as CsvDps;
  }
}
