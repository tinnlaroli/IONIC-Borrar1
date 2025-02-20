import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'componente-uno',
    loadChildren: () => import('./components/componente-uno/componente-uno.module').then( m => m.ComponenteUnoPageModule)
  },
  {
    path: 'componente-dos',
    loadChildren: () => import('./components/componente-dos/componente-dos.module').then( m => m.ComponenteDosPageModule)
  },
  {
    path: 'componente-tres',
    loadChildren: () => import('./components/componente-tres/componente-tres.module').then( m => m.ComponenteTresPageModule)
  },
  {
    path: 'componente-cuatro',
    loadChildren: () => import('./components/componente-cuatro/componente-cuatro.module').then( m => m.ComponenteCuatroPageModule)
  },
  {
    path: 'componente-cinco',
    loadChildren: () => import('./components/componente-cinco/componente-cinco.module').then( m => m.ComponenteCincoPageModule)
  },
  {
    path: 'componente-seis',
    loadChildren: () => import('./components/componente-seis/componente-seis.module').then( m => m.ComponenteSeisPageModule)
  },
  {
    path: 'componente-siete',
    loadChildren: () => import('./components/componente-siete/componente-siete.module').then( m => m.ComponenteSietePageModule)
  },
  {
    path: 'componente-ocho',
    loadChildren: () => import('./components/componente-ocho/componente-ocho.module').then( m => m.ComponenteOchoPageModule)
  },
  {
    path: 'componente-nueve',
    loadChildren: () => import('./components/componente-nueve/componente-nueve.module').then( m => m.ComponenteNuevePageModule)
  },
  {
    path: 'componente-diez',
    loadChildren: () => import('./components/componente-diez/componente-diez.module').then( m => m.ComponenteDiezPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
