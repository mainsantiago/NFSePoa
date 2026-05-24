import { Routes } from '@angular/router';

export const NFSE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/emissao-nfse/emissao-nfse').then(m => m.EmissaoNfseComponent)
  }
];
