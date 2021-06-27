import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home/aggiungi',
    loadChildren: () => import('./pages/aggiungi/aggiungi.module').then( m => m.AggiungiPageModule)
  },
  {
    path: 'home/:idUtente',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'cerca/:idUtente',
    loadChildren: () => import('./pages/cerca/cerca.module').then( m => m.CercaPageModule)
  },
  {
    path: 'preferiti/:idUtente',
    loadChildren: () => import('./pages/preferiti/preferiti.module').then( m => m.PreferitiPageModule)
  },
  {
    path: 'profilo/:idUtente',
    loadChildren: () => import('./pages/profilo/profilo.module').then( m => m.ProfiloPageModule)
  },
  {
    path: 'aggiungi/:idUtente',
    loadChildren: () => import('./pages/aggiungi/aggiungi.module').then( m => m.AggiungiPageModule)
  },
  {
    path: 'aggiungiesercizi/:id/:idUtente',
    loadChildren: () => import('./pages/aggiungiesercizi/aggiungiesercizi.module').then( m => m.AggiungieserciziPageModule)
  },
  {
    path: 'profiloutente/:id/:idUtente',
    loadChildren: () => import('./pages/profiloutente/profiloutente.module').then( m => m.ProfiloutentePageModule)
  },
  {
    path: 'scheda/:id/:idUtente',
    loadChildren: () => import('./pages/scheda/scheda.module').then( m => m.SchedaPageModule)
  },
  {
    path: 'informazioni/:idUtente',
    loadChildren: () => import('./pages/informazioni/informazioni.module').then( m => m.InformazioniPageModule)
  },
  {
    path: 'esercizio/:id/:id2/:idUtente',
    loadChildren: () => import('./pages/esercizio/esercizio.module').then( m => m.EsercizioPageModule)
  },
  {
    path: 'preferiticat/:idUtente/:cat',
    loadChildren: () => import('./pages/preferiticat/preferiticat.module').then( m => m.PreferiticatPageModule)
  },
  {
    path: 'schede-profilo/:idUtente/:cat',
    loadChildren: () => import('./pages/schede-profilo/schede-profilo.module').then( m => m.SchedeProfiloPageModule)
  },
  {
    path: 'schede-categoria/:idUtente/:cat',
    loadChildren: () => import('./pages/schede-categoria/schede-categoria.module').then( m => m.SchedeCategoriaPageModule)
  },
  {
    path: 'schede-profilo-utente/:id/:idUtente/:cat',
    loadChildren: () => import('./pages/schede-profilo-utente/schede-profilo-utente.module').then( m => m.SchedeProfiloUtentePageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
