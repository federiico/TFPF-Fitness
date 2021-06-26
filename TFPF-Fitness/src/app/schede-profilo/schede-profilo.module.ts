import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedeProfiloPageRoutingModule } from './schede-profilo-routing.module';

import { SchedeProfiloPage } from './schede-profilo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedeProfiloPageRoutingModule
  ],
  declarations: [SchedeProfiloPage]
})
export class SchedeProfiloPageModule {}
