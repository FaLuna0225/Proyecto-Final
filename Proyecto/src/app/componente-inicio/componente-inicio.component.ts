import { Component, OnInit } from '@angular/core';
import { ServicioJuegosService } from '../servicio-juegos.service';
@Component({
  selector: 'app-componente-inicio',
  templateUrl: './componente-inicio.component.html',
  styleUrls: ['./componente-inicio.component.css']
})
export class ComponenteInicioComponent implements OnInit {

  infoRecibida:any=""

  constructor(private servicio:ServicioJuegosService) {
    servicio.getInfoJuegos().subscribe((data)=>{
      this.infoRecibida=data
    })
   }

  ngOnInit(): void {
  }

}
