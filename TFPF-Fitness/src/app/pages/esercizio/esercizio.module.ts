import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsercizioPageRoutingModule } from './esercizio-routing.module';

import { EsercizioPage } from './esercizio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsercizioPageRoutingModule
  ],
  declarations: [EsercizioPage]
})
export class EsercizioPageModule {}
