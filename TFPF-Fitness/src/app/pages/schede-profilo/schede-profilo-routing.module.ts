import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedeProfiloPage } from './schede-profilo.page';

const routes: Routes = [
  {
    path: '',
    component: SchedeProfiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedeProfiloPageRoutingModule {}
