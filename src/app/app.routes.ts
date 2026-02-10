import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page';
import { canActivateGuard, canMatchGuard } from './auth/guards/auth-guard';
import { publicGuard } from './auth/guards/public-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then( m => m.AuthModule ),
    canActivate : [publicGuard]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes-module').then( m => m.HeroesModule ),
    canMatch : [canMatchGuard],
    canActivate : [canActivateGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // }
];
