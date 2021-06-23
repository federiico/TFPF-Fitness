import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaschedaCalisthenicsPageRoutingModule } from './categoriascheda-calisthenics-routing.module';

import { CategoriaschedaCalisthenicsPage } from './categoriascheda-calisthenics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaschedaCalisthenicsPageRoutingModule
  ],
  declarations: [CategoriaschedaCalisthenicsPage]
})
export class CategoriaschedaCalisthenicsPageModule {}
