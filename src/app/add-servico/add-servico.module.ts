import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServicoPageRoutingModule } from './add-servico-routing.module';

import { AddServicoPage } from './add-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddServicoPageRoutingModule
  ],
  declarations: [AddServicoPage]
})
export class AddServicoPageModule {}
