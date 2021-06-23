import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaschedaCardioPage } from './categoriascheda-cardio.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaschedaCardioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaschedaCardioPageRoutingModule {}
