import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { LayoutPageComponent } from './pages/layout-page/layout-page';
import { LoginPageComponent } from './pages/login-page/login-page';
import { RegisterPageComponent } from './pages/register-page/register-page';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
