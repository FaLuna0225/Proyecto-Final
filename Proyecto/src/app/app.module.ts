import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePrincipalComponent } from './componente-principal/componente-principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Section1Component } from './section1/section1.component';
import { ComponenteInicioComponent } from './componente-inicio/componente-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePrincipalComponent,
    NavbarComponent,
    Section1Component,
    ComponenteInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
