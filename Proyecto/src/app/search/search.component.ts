import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegosService } from '../servicio-juegos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  valordelLink:string=""
  infoApiBuscada:any=""

  constructor(private route:ActivatedRoute, private servicio:ServicioJuegosService) {
    this.route.params.subscribe((data:any)=>{
      this.valordelLink=data.id
      console.log(this.valordelLink)
      this.servicio.getInfoSearch(this.valordelLink).subscribe((info:any)=>{
        this.infoApiBuscada=info
        console.log(this.infoApiBuscada)
      })
    })
   }

  ngOnInit(): void {
  }

}
