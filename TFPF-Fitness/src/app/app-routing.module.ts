import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: '',
    redirectTo: 'pages/signin',
    pathMatch: 'full'
  },
  {
    path: 'home',
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
    path: 'cerca',
    loadChildren: () => import('./pages/cerca/cerca.module').then( m => m.CercaPageModule)
  },
  {
    path: 'preferiti',
    loadChildren: () => import('./pages/preferiti/preferiti.module').then( m => m.PreferitiPageModule)
  },
  {
    path: 'profilo',
    loadChildren: () => import('./pages/profilo/profilo.module').then( m => m.ProfiloPageModule)
  },
  {
    path: 'aggiungi',
    loadChildren: () => import('./pages/aggiungi/aggiungi.module').then( m => m.AggiungiPageModule)
  },
  {
    path: 'aggiungiesercizi',
    loadChildren: () => import('./pages/aggiungiesercizi/aggiungiesercizi.module').then( m => m.AggiungieserciziPageModule)
  },
  {
    path: 'profiloutente',
    loadChildren: () => import('./pages/profiloutente/profiloutente.module').then( m => m.ProfiloutentePageModule)
  },
  {
    path: 'categoriaschede',
    loadChildren: () => import('./pages/categoriaschede/categoriaschede.module').then( m => m.CategoriaschedePageModule)
  },
  {
    path: 'scheda',
    loadChildren: () => import('./pages/scheda/scheda.module').then( m => m.SchedaPageModule)
  },
  {
    path: 'informazioni',
    loadChildren: () => import('./pages/informazioni/informazioni.module').then( m => m.InformazioniPageModule)
  },
  {
    path: 'esercizio',
    loadChildren: () => import('./pages/esercizio/esercizio.module').then( m => m.EsercizioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
