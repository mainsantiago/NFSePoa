import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import type { CsvDeclaracao, LoteResponse, ClienteResultado } from '../models';

const PREFEITURA = 'sp.poa';
const WS_DCL_PATH = `/ws-proxy/dcl`;

@Injectable({ providedIn: 'root' })
export class SoapDclService {

  constructor(private http: HttpClient) {}

  /**
   * Processa lote de declarações de Serviços Tomados.
   * Agrupa por codigoContribuinte e executa para cada:
   *  1. MOVIMENTO_DECL (Abrir movimento)
   *  2. SERVICOSTOMADOS (Enviar notas)
   *  3. MOVIMENTO_DECL (Fechar movimento)
   */
  processarLote(notas: CsvDeclaracao[]): Observable<LoteResponse> {
    // Agrupar por codigoContribuinte
    const grupos = new Map<string, CsvDeclaracao[]>();
    for (const nota of notas) {
      const key = nota.codigoContribuinte;
      if (!grupos.has(key)) grupos.set(key, []);
      grupos.get(key)!.push(nota);
    }

    // Processar sequencialmente cada contribuinte
    return new Observable<LoteResponse>(subscriber => {
      const resultados: ClienteResultado[] = [];
      const entries = Array.from(grupos.entries());

      const processNext = async (idx: number) => {
        if (idx >= entries.length) {
          const totalSucesso = resultados.filter(r => r.declaracaoStatus === 'OK').length;
          subscriber.next({
            totalProcessadas: notas.length,
            totalSucesso,
            totalErro: resultados.length - totalSucesso,
            resultados,
          });
          subscriber.complete();
          return;
        }

        const [codContrib, notasGrupo] = entries[idx];
        const first = notasGrupo[0];
        const resultado: ClienteResultado = {
          clienteNome: first.clienteNome,
          codigoContribuinte: codContrib,
          movimentoProtocolo: '',
          movimentoStatus: '',
          declaracaoProtocolo: '',
          declaracaoStatus: '',
          mensagens: [],
        };

        try {
          // 1. Abrir movimento
          const abrirXml = this.buildMovimentoDeclXml(first, 'A');
          const abrirResp = await this.sendSoap(abrirXml, 'MOVIMENTO_DECL').toPromise();
          const abrirParsed = this.parseMovimentoResponse(abrirResp!);

          if (abrirParsed.status !== 'OK') {
            resultado.movimentoStatus = abrirParsed.status;
            resultado.declaracaoStatus = 'ERRO';
            resultado.mensagens = [{ identificadorNota: 0, mensagem: `Erro ao abrir movimento: ${abrirParsed.mensagem}` }];
            resultados.push(resultado);
            processNext(idx + 1);
            return;
          }

          resultado.movimentoProtocolo = abrirParsed.protocolo;
          resultado.movimentoStatus = 'ABERTO';

          // 2. Enviar notas
          const notasXml = this.buildServicosTomadosXml(first, notasGrupo);
          const notasResp = await this.sendSoap(notasXml, 'SERVICOSTOMADOS').toPromise();
          const notasParsed = this.parseServicosTomadosResponse(notasResp!, notasGrupo);

          resultado.declaracaoProtocolo = notasParsed.protocolo;
          resultado.declaracaoStatus = notasParsed.status;
          resultado.mensagens = notasParsed.mensagens;

          // 3. Fechar movimento
          const fecharXml = this.buildMovimentoDeclXml(first, 'F');
          await this.sendSoap(fecharXml, 'MOVIMENTO_DECL').toPromise();

        } catch (err: any) {
          resultado.declaracaoStatus = 'ERRO';
          resultado.mensagens = [{
            identificadorNota: 0,
            mensagem: err.message || 'Erro de comunicação com o WebService',
          }];
        }

        resultados.push(resultado);
        processNext(idx + 1);
      };

      processNext(0);
    });
  }

  private sendSoap(xmlBody: string, action: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/xml; charset=utf-8',
      'SOAPAction': `DCLaction/AWS_DCL.${action}`,
    });

    return this.http.post(WS_DCL_PATH, xmlBody, {
      headers,
      responseType: 'text',
    });
  }

  // ─── XML Builders ────────────────────────────────────────────

  private buildMovimentoDeclXml(nota: CsvDeclaracao, acao: string): string {
    return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dcl="DCL">
  <soap:Body>
    <dcl:ws_dcl.MOVIMENTO_DECL>
      <dcl:Sdt_movimentodeclin>
        <dcl:Login>
          <dcl:CodigoUsuario>${this.esc(nota.codigoUsuario)}</dcl:CodigoUsuario>
          <dcl:CodigoContribuinte>${this.esc(nota.codigoContribuinte)}</dcl:CodigoContribuinte>
        </dcl:Login>
        <dcl:Movimento>
          <dcl:Ano>${nota.ano}</dcl:Ano>
          <dcl:Mes>${nota.mes}</dcl:Mes>
          <dcl:Acao>${acao}</dcl:Acao>
          <dcl:CpfResponsavel>${this.esc(nota.cpfResponsavel)}</dcl:CpfResponsavel>
          <dcl:NomeResponsavel>${this.esc(nota.nomeResponsavel)}</dcl:NomeResponsavel>
          <dcl:EmailResponsavel>${this.esc(nota.emailResponsavel)}</dcl:EmailResponsavel>
          <dcl:PossuiServicosPrestados>${nota.possuiServicosPrestados}</dcl:PossuiServicosPrestados>
          <dcl:PossuiServicosTomados>${nota.possuiServicosTomados}</dcl:PossuiServicosTomados>
        </dcl:Movimento>
      </dcl:Sdt_movimentodeclin>
    </dcl:ws_dcl.MOVIMENTO_DECL>
  </soap:Body>
</soap:Envelope>`;
  }

  private buildServicosTomadosXml(first: CsvDeclaracao, notas: CsvDeclaracao[]): string {
    const notasXml = notas.map(n => `
        <dcl:Nota>
          <dcl:OperacaoNota>${this.esc(n.operacaoNota)}</dcl:OperacaoNota>
          <dcl:DataEmissao>${this.esc(n.dataEmissao)}</dcl:DataEmissao>
          <dcl:DataPrestacaoServico>${this.esc(n.dataPrestacaoServico)}</dcl:DataPrestacaoServico>
          <dcl:TipoNF>${this.esc(n.tipoNf)}</dcl:TipoNF>
          <dcl:Serie>${this.esc(n.serie || '')}</dcl:Serie>
          <dcl:Numero>${n.numero || 0}</dcl:Numero>
          <dcl:Situacao>${n.situacao}</dcl:Situacao>
          <dcl:RpsSerie>${this.esc(n.rpsSerie || '')}</dcl:RpsSerie>
          <dcl:RpsNumero>${n.rpsNumero || 0}</dcl:RpsNumero>
          <dcl:TipoPessoa>${this.esc(n.tipoPessoa)}</dcl:TipoPessoa>
          <dcl:CpfCnpjPrestador>${this.esc(n.cpfCnpjPrestador)}</dcl:CpfCnpjPrestador>
          <dcl:RazaoSocialPrestador>${this.esc(n.razaoSocialPrestador)}</dcl:RazaoSocialPrestador>
          <dcl:InscricaoMunicipalPrestador>${this.esc(n.inscricaoMunicipalPrestador || '')}</dcl:InscricaoMunicipalPrestador>
          <dcl:CepPrestador>${this.esc(n.cepPrestador)}</dcl:CepPrestador>
          <dcl:MunicipioPrestador>${this.esc(n.municipioPrestador)}</dcl:MunicipioPrestador>
          <dcl:UfPrestador>${this.esc(n.ufPrestador)}</dcl:UfPrestador>
          <dcl:LogradouroPrestador>${this.esc(n.logradouroPrestador)}</dcl:LogradouroPrestador>
          <dcl:NumeroEnderecoPrestador>${this.esc(n.numeroEnderecoPrestador)}</dcl:NumeroEnderecoPrestador>
          <dcl:ComplementoEnderecoPrestador>${this.esc(n.complementoEnderecoPrestador || '')}</dcl:ComplementoEnderecoPrestador>
          <dcl:BairroPrestador>${this.esc(n.bairroPrestador)}</dcl:BairroPrestador>
          <dcl:MunicipioPrestacao>${this.esc(n.municipioPrestacao)}</dcl:MunicipioPrestacao>
          <dcl:UfPrestacao>${this.esc(n.ufPrestacao)}</dcl:UfPrestacao>
          <dcl:CodigoServico>${this.esc(n.codigoServico)}</dcl:CodigoServico>
          <dcl:Discriminacao>${this.esc(n.discriminacao)}</dcl:Discriminacao>
          <dcl:ValorNota>${this.fmtNum(n.valorNota)}</dcl:ValorNota>
          <dcl:ValorDeducao>${this.fmtNum(n.valorDeducao)}</dcl:ValorDeducao>
          <dcl:BaseCalculo>${this.fmtNum(n.baseCalculo)}</dcl:BaseCalculo>
          <dcl:AliqIss>${this.fmtNum(n.aliqIss)}</dcl:AliqIss>
          <dcl:IssDevido>${this.fmtNum(n.issDevido)}</dcl:IssDevido>
          <dcl:IssRetido>${this.fmtNum(n.issRetido)}</dcl:IssRetido>
          <dcl:Observacao>${this.esc(n.observacao || '')}</dcl:Observacao>
        </dcl:Nota>`).join('');

    return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dcl="DCL">
  <soap:Body>
    <dcl:ws_dcl.SERVICOSTOMADOS>
      <dcl:Sdt_servicostomadosin>
        <dcl:Login>
          <dcl:CodigoUsuario>${this.esc(first.codigoUsuario)}</dcl:CodigoUsuario>
          <dcl:CodigoContribuinte>${this.esc(first.codigoContribuinte)}</dcl:CodigoContribuinte>
        </dcl:Login>
        <dcl:Notas>${notasXml}
        </dcl:Notas>
      </dcl:Sdt_servicostomadosin>
    </dcl:ws_dcl.SERVICOSTOMADOS>
  </soap:Body>
</soap:Envelope>`;
  }

  // ─── XML Parsers ─────────────────────────────────────────────

  private parseMovimentoResponse(xml: string): { status: string; protocolo: string; mensagem: string } {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');

    const status = this.getTagText(doc, 'Status') || this.getTagText(doc, 'Situacao') || '';
    const protocolo = this.getTagText(doc, 'Protocolo') || '';
    const mensagem = this.getTagText(doc, 'Description') || this.getTagText(doc, 'Mensagem') || '';

    return {
      status: status.toUpperCase() === 'OK' || status === '1' ? 'OK' : status,
      protocolo,
      mensagem,
    };
  }

  private parseServicosTomadosResponse(xml: string, notas: CsvDeclaracao[]): {
    status: string; protocolo: string;
    mensagens: { identificadorNota: number; mensagem: string }[];
  } {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');

    const retorno = this.getTagText(doc, 'Retorno') || '';
    const protocolo = this.getTagText(doc, 'Protocolo') || '';
    const mensagens: { identificadorNota: number; mensagem: string }[] = [];

    const messages = doc.getElementsByTagName('Message');
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      const desc = this.getTagText(msg as any, 'Description') || '';
      const linErr = parseInt(this.getTagText(msg as any, 'LinErr') || '0', 10);
      if (desc) {
        mensagens.push({ identificadorNota: linErr, mensagem: desc });
      }
    }

    return {
      status: retorno.toLowerCase() === 'true' || retorno === '1' ? 'OK' : 'ERRO',
      protocolo,
      mensagens,
    };
  }

  // ─── Helpers ─────────────────────────────────────────────────

  private getTagText(parent: Document | Element, tagName: string): string | null {
    // Tenta com e sem namespace
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
}
