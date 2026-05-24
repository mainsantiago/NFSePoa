import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import type { CsvDps, DpsLoteResponse } from '../models';

const WS_NFE_PATH = `/ws-proxy/nfe`;

@Injectable({ providedIn: 'root' })
export class SoapNfseService {

  constructor(private http: HttpClient) {}

  /**
   * Envia lote de DPS via PROCESSARPS.
   * Monta o XML SOAP completo a partir dos dados do CSV.
   */
  enviarLoteDps(dps: CsvDps[]): Observable<DpsLoteResponse> {
    if (dps.length === 0) {
      return new Observable(sub => {
        sub.next({ retorno: false, protocolo: '', messages: [{ id: 'ERRO', type: 0, description: 'Nenhum DPS para enviar', linErr: 0 }] });
        sub.complete();
      });
    }

    const xml = this.buildProcessarpsXml(dps);
    console.log('[SOAP-NFSE] XML enviado:', xml);

    const headers = new HttpHeaders({
      'Content-Type': 'text/xml; charset=utf-8',
      'SOAPAction': 'NFeaction/AWS_NFE.PROCESSARPS',
    });

    return this.http.post(WS_NFE_PATH, xml, { headers, responseType: 'text' }).pipe(
      map(resp => {
        console.log('[SOAP-NFSE] Resposta WS:', resp);
        return this.parseProcessarpsResponse(resp);
      })
    );
  }

  // ─── XML Builder ─────────────────────────────────────────────

  private buildProcessarpsXml(dps: CsvDps[]): string {
    const first = dps[0];

    // Calcular DTIni / DTFin (menor e maior data de emissão)
    const datas = dps.map(d => d.dtEmi);
    const dtIni = datas[0] || '';
    const dtFin = datas[datas.length - 1] || dtIni;

    // Totalização para Reg90
    const totais = dps.reduce((acc, d) => ({
      qtd: acc.qtd + 1,
      vlNfs: acc.vlNfs + (d.vlNfs || 0),
      vlIss: acc.vlIss + (d.vlIss || 0),
      vlDed: acc.vlDed + (d.vlDed || 0),
      vlIssRet: acc.vlIssRet + (d.vlIssRet || 0),
    }), { qtd: 0, vlNfs: 0, vlIss: 0, vlDed: 0, vlIssRet: 0 });

    const startRps = dps[0].numRps || 1;
    const reg20Items = dps.map((d, i) => this.buildReg20Item(d, startRps + i)).join('');

    return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:nfe="NFe">
  <soap:Body>
    <nfe:ws_nfe.PROCESSARPS>
      <nfe:Sdt_processarpsin>
        <nfe:Login>
          <nfe:CodigoUsuario>${this.esc(first.codigoUsuario)}</nfe:CodigoUsuario>
          <nfe:CodigoContribuinte>${this.esc(first.codigoContribuinte)}</nfe:CodigoContribuinte>
        </nfe:Login>
        <nfe:SDTRPS>
          <nfe:Ano>${first.ano}</nfe:Ano>
          <nfe:Mes>${first.mes}</nfe:Mes>
          <nfe:CPFCNPJ>${this.esc(first.cpfCnpjPrestador)}</nfe:CPFCNPJ>
          <nfe:DTIni>${this.esc(dtIni)}</nfe:DTIni>
          <nfe:DTFin>${this.esc(dtFin)}</nfe:DTFin>
          <nfe:TipoTrib>${first.tipoTrib}</nfe:TipoTrib>
          <nfe:DtAdeSN />
          <nfe:AlqIssSN_IP>${first.alqIssSN ? this.fmtNum(first.alqIssSN) : ''}</nfe:AlqIssSN_IP>
          <nfe:RegApTribSN>${first.regApTribSN || ''}</nfe:RegApTribSN>
          <nfe:TribTpSusp />
          <nfe:TribProcSusp />
          <nfe:Versao>4.00</nfe:Versao>
          <nfe:Reg20>${reg20Items}
          </nfe:Reg20>
          <nfe:Reg90>
            <nfe:QtdRegNormal>${totais.qtd}</nfe:QtdRegNormal>
            <nfe:ValorNFS>${this.fmtNum(totais.vlNfs)}</nfe:ValorNFS>
            <nfe:ValorISS>${this.fmtNum(totais.vlIss)}</nfe:ValorISS>
            <nfe:ValorDed>${this.fmtNum(totais.vlDed)}</nfe:ValorDed>
            <nfe:ValorIssRetTom>${this.fmtNum(totais.vlIssRet)}</nfe:ValorIssRetTom>
            <nfe:QtdReg30>0</nfe:QtdReg30>
            <nfe:ValorTributos>0,00</nfe:ValorTributos>
            <nfe:QtdReg40>${dps.length * 4}</nfe:QtdReg40>
            <nfe:QtdReg50>0</nfe:QtdReg50>
          </nfe:Reg90>
        </nfe:SDTRPS>
      </nfe:Sdt_processarpsin>
    </nfe:ws_nfe.PROCESSARPS>
  </soap:Body>
</soap:Envelope>`;
  }

  private buildReg20Item(d: CsvDps, rpsNum: number): string {
    return `
            <nfe:Reg20Item>
              <nfe:TipoNFS>RPS</nfe:TipoNFS>
              <nfe:NumRps>${rpsNum}</nfe:NumRps>
              <nfe:SerRps>${this.esc(d.serRps || '')}</nfe:SerRps>
              <nfe:DtEmi>${this.esc(d.dtEmi)}</nfe:DtEmi>
              <nfe:RetFonte>${this.esc(d.retFonte)}</nfe:RetFonte>
              <nfe:CodSrv>${this.esc(d.codSrv)}</nfe:CodSrv>
              <nfe:DiscrSrv>${this.esc(d.discrSrv)}</nfe:DiscrSrv>
              <nfe:VlNFS>${this.fmtNum(d.vlNfs)}</nfe:VlNFS>
              <nfe:VlDed>${this.fmtNum(d.vlDed)}</nfe:VlDed>
              <nfe:DiscrDed />
              <nfe:VlBasCalc>${this.fmtNum(d.vlBasCalc)}</nfe:VlBasCalc>
              <nfe:AlqIss>${this.fmtNum(d.alqIss)}</nfe:AlqIss>
              <nfe:VlIss>${this.fmtNum(d.vlIss)}</nfe:VlIss>
              <nfe:VlIssRet>${this.fmtNum(d.vlIssRet)}</nfe:VlIssRet>
              <nfe:CpfCnpTom>${this.esc(d.cpfCnpjTom)}</nfe:CpfCnpTom>
              <nfe:RazSocTom>${this.esc(d.razSocTom)}</nfe:RazSocTom>
              <nfe:TipoLogtom>${this.extractTipoLog(d.logTom)}</nfe:TipoLogtom>
              <nfe:LogTom>${this.esc(d.logTom)}</nfe:LogTom>
              <nfe:NumEndTom>${this.esc(d.numEndTom)}</nfe:NumEndTom>
              <nfe:ComplEndTom />
              <nfe:BairroTom>${this.esc(d.bairroTom)}</nfe:BairroTom>
              <nfe:MunTom>${this.esc(d.munTom)}</nfe:MunTom>
              <nfe:SiglaUFTom>${this.esc(d.siglaUfTom)}</nfe:SiglaUFTom>
              <nfe:CepTom>${this.esc(d.cepTom)}</nfe:CepTom>
              <nfe:Telefone />
              <nfe:InscricaoMunicipal />
              <nfe:TipoLogLocPre />
              <nfe:LogLocPre />
              <nfe:NumEndLocPre />
              <nfe:ComplEndLocPre />
              <nfe:BairroLocPre />
              <nfe:MunLocPre />
              <nfe:SiglaUFLocpre />
              <nfe:CepLocPre />
              <nfe:Email1>${this.esc(d.emailTom || '')}</nfe:Email1>
              <nfe:Email2 />
              <nfe:Email3 />
              <nfe:MoedaTrnExt />
              <nfe:ValTrnExt />
              <nfe:Reg40>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_CTN</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(d.srvCtn)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_NBS</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(d.srvNbs)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_CNAE</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(d.cnae)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_AnexoSN</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(d.anexoSn)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
              </nfe:Reg40>
              <nfe:Reg60_RTC>
                <nfe:Finalidade>0</nfe:Finalidade>
                <nfe:IndConsFin>NAO</nfe:IndConsFin>
                <nfe:IndDest>SIM</nfe:IndDest>
                <nfe:IndOpeOne>NAO</nfe:IndOpeOne>
                <nfe:IndCodOpe>${this.esc(d.rtcIndCodOpe)}</nfe:IndCodOpe>
                <nfe:VlReeRepRes />
                <nfe:gIBSCBS>
                  <nfe:CST>${this.esc(d.rtcCstIbsCbs)}</nfe:CST>
                  <nfe:CClassTrib>${this.esc(d.rtcCClassTrib)}</nfe:CClassTrib>
                  <nfe:CCodCredPres />
                </nfe:gIBSCBS>
              </nfe:Reg60_RTC>
            </nfe:Reg20Item>`;
  }

  // ─── XML Parser ──────────────────────────────────────────────

  private parseProcessarpsResponse(xml: string): DpsLoteResponse {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');

    const retorno = this.getTagText(doc, 'Retorno');
    const protocolo = this.getTagText(doc, 'Protocolo') || '';
    const messages: DpsLoteResponse['messages'] = [];

    const msgEls = doc.getElementsByTagName('Message');
    for (let i = 0; i < msgEls.length; i++) {
      const el = msgEls[i];
      messages.push({
        id: this.getTagText(el as any, 'Id') || '',
        type: parseInt(this.getTagText(el as any, 'Type') || '0', 10),
        description: this.getTagText(el as any, 'Description') || '',
        linErr: parseInt(this.getTagText(el as any, 'LinErr') || '0', 10),
      });
    }

    return {
      retorno: retorno?.toLowerCase() === 'true',
      protocolo,
      messages,
    };
  }

  // ─── Helpers ─────────────────────────────────────────────────

  private getTagText(parent: Document | Element, tagName: string): string | null {
    let els = parent.getElementsByTagName(tagName);
    if (els.length === 0) {
      els = parent.getElementsByTagNameNS('*', tagName);
    }
    return els.length > 0 ? els[0].textContent : null;
  }

  private esc(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  private fmtNum(value: number): string {
    return (value || 0).toFixed(2).replace('.', ',');
  }

  private extractTipoLog(logradouro: string): string {
    const tipos: Record<string, string> = {
      'rua': 'RUA', 'r.': 'RUA', 'r ': 'RUA',
      'avenida': 'AVENIDA', 'av.': 'AVENIDA', 'av ': 'AVENIDA',
      'travessa': 'TRAVESSA', 'tv.': 'TRAVESSA', 'trav.': 'TRAVESSA',
      'alameda': 'ALAMEDA', 'al.': 'ALAMEDA',
      'praca': 'PRACA', 'pca.': 'PRACA', 'praça': 'PRACA',
      'rodovia': 'RODOVIA', 'rod.': 'RODOVIA',
      'estrada': 'ESTRADA', 'est.': 'ESTRADA',
      'largo': 'LARGO', 'lg.': 'LARGO',
      'beco': 'BECO', 'bc.': 'BECO',
      'vila': 'VILA',
    };
    const lower = logradouro.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    for (const [prefix, tipo] of Object.entries(tipos)) {
      if (lower.startsWith(prefix)) return tipo;
    }
    return 'RUA';
  }
}
