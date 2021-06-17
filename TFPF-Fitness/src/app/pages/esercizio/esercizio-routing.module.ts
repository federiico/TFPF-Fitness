import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsercizioPage } from './esercizio.page';

const routes: Routes = [
  {
    path: '',
    component: EsercizioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsercizioPageRoutingModule {}
