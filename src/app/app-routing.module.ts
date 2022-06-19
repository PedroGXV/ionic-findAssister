import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'busca-servico',
    loadChildren: () => import('./busca-servico/busca-servico.module').then( m => m.BuscaServicoPageModule)
  },
  {
    path: 'presta-servico',
    loadChildren: () => import('./presta-servico/presta-servico.module').then( m => m.PrestaServicoPageModule)
  },
  {
    path: 'add-servico',
    loadChildren: () => import('./add-servico/add-servico.module').then( m => m.AddServicoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
