import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenicationRoutingModule } from './authenication-routing.module';
import { AuthenicationComponent } from './authenication.component';


@NgModule({
  declarations: [
    AuthenicationComponent
  ],
  imports: [
    CommonModule,
    AuthenicationRoutingModule
  ]
})
export class AuthenicationModule { }
