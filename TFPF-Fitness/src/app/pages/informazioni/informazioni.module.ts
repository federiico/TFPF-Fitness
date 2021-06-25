import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformazioniPageRoutingModule } from './informazioni-routing.module';

import { InformazioniPage } from './informazioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InformazioniPageRoutingModule
  ],
  declarations: [InformazioniPage]
})
export class InformazioniPageModule {}
