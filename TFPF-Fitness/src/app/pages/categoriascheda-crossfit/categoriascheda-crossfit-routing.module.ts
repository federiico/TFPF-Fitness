import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaschedaCrossfitPage } from './categoriascheda-crossfit.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaschedaCrossfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaschedaCrossfitPageRoutingModule {}
