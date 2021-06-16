import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloutentePage } from './profiloutente.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloutentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloutentePageRoutingModule {}
