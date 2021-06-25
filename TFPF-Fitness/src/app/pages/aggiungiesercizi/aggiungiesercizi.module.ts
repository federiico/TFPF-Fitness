import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungieserciziPageRoutingModule } from './aggiungiesercizi-routing.module';

import { AggiungieserciziPage } from './aggiungiesercizi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AggiungieserciziPageRoutingModule
  ],
  declarations: [AggiungieserciziPage]
})
export class AggiungieserciziPageModule {}
