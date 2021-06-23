import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaschedaCardioPageRoutingModule } from './categoriascheda-cardio-routing.module';

import { CategoriaschedaCardioPage } from './categoriascheda-cardio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaschedaCardioPageRoutingModule
  ],
  declarations: [CategoriaschedaCardioPage]
})
export class CategoriaschedaCardioPageModule {}
