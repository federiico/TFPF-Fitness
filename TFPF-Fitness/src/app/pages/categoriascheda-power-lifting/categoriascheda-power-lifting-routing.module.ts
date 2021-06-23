import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaschedaPowerLiftingPage } from './categoriascheda-power-lifting.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaschedaPowerLiftingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaschedaPowerLiftingPageRoutingModule {}
