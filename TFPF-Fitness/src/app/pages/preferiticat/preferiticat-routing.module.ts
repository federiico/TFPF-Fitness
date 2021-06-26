import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferiticatPage } from './preferiticat.page';

const routes: Routes = [
  {
    path: '',
    component: PreferiticatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferiticatPageRoutingModule {}
