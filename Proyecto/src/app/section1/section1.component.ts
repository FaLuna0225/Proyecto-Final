import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  
  @Input() imagenJuego:string=''
  @Input() nombreJuego:string=''
  @Input() idJuego:string=''

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irADatos(){
    this.router.navigate(["details",this.idJuego])
  }

}
