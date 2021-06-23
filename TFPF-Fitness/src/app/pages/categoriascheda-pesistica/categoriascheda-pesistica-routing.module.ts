import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaschedaPesisticaPage } from './categoriascheda-pesistica.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaschedaPesisticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaschedaPesisticaPageRoutingModule {}
