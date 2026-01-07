import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page';
import { NewPageComponent } from './pages/new-page/new-page';

const routes: Routes = [
  {
    //  locahost:4200/heroes/
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'new-hero',
        component: NewPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
