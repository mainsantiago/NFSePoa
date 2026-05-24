const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4200;

const WS_TARGET = 'https://nfe.etransparencia.com.br';

// Proxy SOAP requests
app.use('/ws-proxy/dcl', createProxyMiddleware({
  target: WS_TARGET,
  changeOrigin: true,
  pathRewrite: { '^/ws-proxy/dcl': '/sp.poa/webservice/aws_dcl.aspx' },
}));

app.use('/ws-proxy/nfe', createProxyMiddleware({
  target: WS_TARGET,
  changeOrigin: true,
  pathRewrite: { '^/ws-proxy/nfe': '/sp.poa/webservice/aws_nfe.aspx' },
}));

// Serve Angular static files
app.use(express.static(path.join(__dirname, 'dist/nfpoa/browser')));

// Fallback to index.html for Angular routing
app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/nfpoa/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`NFPOA rodando em http://localhost:${PORT}`);
});
