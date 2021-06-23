import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaschedaPesisticaPageRoutingModule } from './categoriascheda-pesistica-routing.module';

import { CategoriaschedaPesisticaPage } from './categoriascheda-pesistica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaschedaPesisticaPageRoutingModule
  ],
  declarations: [CategoriaschedaPesisticaPage]
})
export class CategoriaschedaPesisticaPageModule {}
