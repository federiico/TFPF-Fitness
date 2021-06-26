import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedeCategoriaPageRoutingModule } from './schede-categoria-routing.module';

import { SchedeCategoriaPage } from './schede-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedeCategoriaPageRoutingModule
  ],
  declarations: [SchedeCategoriaPage]
})
export class SchedeCategoriaPageModule {}
