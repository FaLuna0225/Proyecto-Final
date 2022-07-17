import { Component, OnInit, Input } from '@angular/core';
import { ServicioJuegosService } from '../servicio-juegos.service';

@Component({
  selector: 'app-juegos-moda',
  templateUrl: './juegos-moda.component.html',
  styleUrls: ['./juegos-moda.component.css']
})
export class JuegosModaComponent implements OnInit {

  informacionRecibida:any=""
  @Input() imagenJuego:string=''
  @Input() nombreJuego:string=''

  constructor(private servicio:ServicioJuegosService) {
    servicio.getInfoJuegos().subscribe((data)=>{
      this.informacionRecibida=data
    })
   }

  ngOnInit(): void {
    
  }

}
