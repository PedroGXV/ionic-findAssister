import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaServicoPageRoutingModule } from './busca-servico-routing.module';

import { BuscaServicoPage } from './busca-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaServicoPageRoutingModule
  ],
  declarations: [BuscaServicoPage]
})
export class BuscaServicoPageModule {}
