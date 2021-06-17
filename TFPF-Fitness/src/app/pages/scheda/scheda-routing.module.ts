import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedaPage } from './scheda.page';

const routes: Routes = [
  {
    path: '',
    component: SchedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedaPageRoutingModule {}
