import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferiticatPageRoutingModule } from './preferiticat-routing.module';

import { PreferiticatPage } from './preferiticat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferiticatPageRoutingModule
  ],
  declarations: [PreferiticatPage]
})
export class PreferiticatPageModule {}
