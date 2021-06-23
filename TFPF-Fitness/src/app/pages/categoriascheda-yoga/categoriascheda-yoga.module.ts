import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaschedaYogaPageRoutingModule } from './categoriascheda-yoga-routing.module';

import { CategoriaschedaYogaPage } from './categoriascheda-yoga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaschedaYogaPageRoutingModule
  ],
  declarations: [CategoriaschedaYogaPage]
})
export class CategoriaschedaYogaPageModule {}
