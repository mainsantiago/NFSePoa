import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'nfse',
        pathMatch: 'full'
      },
      {
        path: 'nfse',
        loadChildren: () => import('./features/nfse/nfse.routes').then(m => m.NFSE_ROUTES)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
