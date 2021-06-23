import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaschedaYogaPage } from './categoriascheda-yoga.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaschedaYogaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaschedaYogaPageRoutingModule {}
