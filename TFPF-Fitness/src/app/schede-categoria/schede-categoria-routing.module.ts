import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedeCategoriaPage } from './schede-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: SchedeCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedeCategoriaPageRoutingModule {}
