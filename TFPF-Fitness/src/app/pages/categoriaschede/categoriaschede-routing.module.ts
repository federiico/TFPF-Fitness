import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaschedePage } from './categoriaschede.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaschedePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaschedePageRoutingModule {}
