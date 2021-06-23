import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaschedaCrossfitPageRoutingModule } from './categoriascheda-crossfit-routing.module';

import { CategoriaschedaCrossfitPage } from './categoriascheda-crossfit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaschedaCrossfitPageRoutingModule
  ],
  declarations: [CategoriaschedaCrossfitPage]
})
export class CategoriaschedaCrossfitPageModule {}
