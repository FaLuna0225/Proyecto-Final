import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Section1Component } from './section1/section1.component';
import { ComponenteInicioComponent } from './componente-inicio/componente-inicio.component';
import { Section2Component } from './section2/section2.component';
import { JuegosModaComponent } from './juegos-moda/juegos-moda.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Section1Component,
    ComponenteInicioComponent,
    Section2Component,
    JuegosModaComponent,
    RegistrarseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
