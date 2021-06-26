import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaschedaCalisthenicsPage } from './categoriascheda-calisthenics.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaschedaCalisthenicsPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaschedaCalisthenicsPageRoutingModule {}
