import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenicationComponent } from './authenication/authenication.component';
import { AuthenicationService } from './authenication/authenication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [AuthenicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
