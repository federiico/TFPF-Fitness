import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaschedePageRoutingModule } from './categoriaschede-routing.module';

import { CategoriaschedePage } from './categoriaschede.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaschedePageRoutingModule
  ],
  declarations: [CategoriaschedePage]
})
export class CategoriaschedePageModule {}
