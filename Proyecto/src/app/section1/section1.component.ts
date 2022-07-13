import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  
  @Input() imagenJuego:string=''
  @Input() nombreJuego:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
