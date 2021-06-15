import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'cerca',
    loadChildren: () => import('./cerca/cerca.module').then( m => m.CercaPageModule)
  },
  {
    path: 'preferiti',
    loadChildren: () => import('./preferiti/preferiti.module').then( m => m.PreferitiPageModule)
  },
  {
    path: 'profilo',
    loadChildren: () => import('./profilo/profilo.module').then( m => m.ProfiloPageModule)
  },
  {
    path: 'aggiungi',
    loadChildren: () => import('./aggiungi/aggiungi.module').then( m => m.AggiungiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
