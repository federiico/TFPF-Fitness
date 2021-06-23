import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaschedaPowerLiftingPageRoutingModule } from './categoriascheda-power-lifting-routing.module';

import { CategoriaschedaPowerLiftingPage } from './categoriascheda-power-lifting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaschedaPowerLiftingPageRoutingModule
  ],
  declarations: [CategoriaschedaPowerLiftingPage]
})
export class CategoriaschedaPowerLiftingPageModule {}
