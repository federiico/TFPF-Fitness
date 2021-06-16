import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloutentePageRoutingModule } from './profiloutente-routing.module';

import { ProfiloutentePage } from './profiloutente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloutentePageRoutingModule
  ],
  declarations: [ProfiloutentePage]
})
export class ProfiloutentePageModule {}
