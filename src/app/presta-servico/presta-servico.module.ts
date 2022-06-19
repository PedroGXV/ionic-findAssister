import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestaServicoPageRoutingModule } from './presta-servico-routing.module';

import { PrestaServicoPage } from './presta-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestaServicoPageRoutingModule
  ],
  declarations: [PrestaServicoPage]
})
export class PrestaServicoPageModule {}
