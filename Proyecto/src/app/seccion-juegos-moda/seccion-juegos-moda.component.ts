import { Component, OnInit } from '@angular/core';
import { ServicioJuegosService } from '../servicio-juegos.service';

@Component({
  selector: 'app-seccion-juegos-moda',
  templateUrl: './seccion-juegos-moda.component.html',
  styleUrls: ['./seccion-juegos-moda.component.css']
})
export class SeccionJuegosModaComponent implements OnInit {
  infoRecibida:any=""
  constructor(private servicio:ServicioJuegosService) {
    servicio.getInfoJuegos().subscribe((data)=>{
      this.infoRecibida=data
    })
   }

  ngOnInit(): void {
  }

}
