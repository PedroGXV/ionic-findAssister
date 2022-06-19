import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestaServicoPage } from './presta-servico.page';

const routes: Routes = [
  {
    path: '',
    component: PrestaServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestaServicoPageRoutingModule {}
