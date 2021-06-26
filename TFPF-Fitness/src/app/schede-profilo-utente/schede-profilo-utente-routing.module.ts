import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedeProfiloUtentePage } from './schede-profilo-utente.page';

const routes: Routes = [
  {
    path: '',
    component: SchedeProfiloUtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedeProfiloUtentePageRoutingModule {}
