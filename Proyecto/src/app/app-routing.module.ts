import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteInicioComponent } from './componente-inicio/componente-inicio.component';
import { DatosJuegoComponent } from './datos-juego/datos-juego.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SearchComponent } from './search/search.component';
import { SeccionJuegosModaComponent } from './seccion-juegos-moda/seccion-juegos-moda.component';

const routes: Routes = [
  {path: "inicio", component:ComponenteInicioComponent},
  {path: "juegos", component:SeccionJuegosModaComponent},
  {path: "details/:id", component:DatosJuegoComponent},
  {path: "registrarse", component:RegistrarseComponent},
  {path: "search/:id", component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
