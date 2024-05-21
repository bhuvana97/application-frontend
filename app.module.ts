import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Component2Component } from './component2/component2.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    RegisterComponent,
    LoginComponent,
    Component2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
