import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaServicoPage } from './busca-servico.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaServicoPageRoutingModule {}
