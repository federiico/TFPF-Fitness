import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedeProfiloUtentePageRoutingModule } from './schede-profilo-utente-routing.module';

import { SchedeProfiloUtentePage } from './schede-profilo-utente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedeProfiloUtentePageRoutingModule
  ],
  declarations: [SchedeProfiloUtentePage]
})
export class SchedeProfiloUtentePageModule {}
