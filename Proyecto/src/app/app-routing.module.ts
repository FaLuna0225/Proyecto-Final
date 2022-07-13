import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteInicioComponent } from './componente-inicio/componente-inicio.component';
import { JuegosModaComponent } from './juegos-moda/juegos-moda.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {path: "inicio", component:ComponenteInicioComponent},
  {path: "juegos", component:JuegosModaComponent},
  {path: "registrarse", component:RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
