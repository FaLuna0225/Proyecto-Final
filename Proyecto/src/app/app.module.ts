import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Section1Component } from './section1/section1.component';
import { ComponenteInicioComponent } from './componente-inicio/componente-inicio.component';
import { JuegosModaComponent } from './juegos-moda/juegos-moda.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SeccionJuegosModaComponent } from './seccion-juegos-moda/seccion-juegos-moda.component';
import { SearchComponent } from './search/search.component';
import { DatosJuegoComponent } from './datos-juego/datos-juego.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Section1Component,
    ComponenteInicioComponent,
    JuegosModaComponent,
    RegistrarseComponent,
    SeccionJuegosModaComponent,
    SearchComponent,
    DatosJuegoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
