import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegosService } from '../servicio-juegos.service';
@Component({
  selector: 'app-datos-juego',
  templateUrl: './datos-juego.component.html',
  styleUrls: ['./datos-juego.component.css']
})
export class DatosJuegoComponent implements OnInit {
  valorLink:string=""
  infoRecibida:any=""
  @Input() name:any=""

  constructor(private route:ActivatedRoute, private servicio:ServicioJuegosService) { 
    this.route.params.subscribe((data:any)=>{
      this.valorLink=data.id
      this.servicio.getInfoDatos(this.valorLink).subscribe((info:any)=>{
        this.infoRecibida=info
      })
    })
  }

  ngOnInit(): void {
  }

}
