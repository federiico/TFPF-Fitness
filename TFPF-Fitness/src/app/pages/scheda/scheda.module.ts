import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedaPageRoutingModule } from './scheda-routing.module';

import { SchedaPage } from './scheda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedaPageRoutingModule
  ],
  declarations: [SchedaPage]
})
export class SchedaPageModule {}
