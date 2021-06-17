import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggiungieserciziPage } from './aggiungiesercizi.page';

const routes: Routes = [
  {
    path: '',
    component: AggiungieserciziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggiungieserciziPageRoutingModule {}
