import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungiPageRoutingModule } from './aggiungi-routing.module';

import { AggiungiPage } from './aggiungi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AggiungiPageRoutingModule
  ],
  declarations: [AggiungiPage]
})
export class AggiungiPageModule {}
