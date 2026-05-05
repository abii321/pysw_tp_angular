import { Component } from '@angular/core';
import { Punto3 } from '../../models/punto3.class';
import { Punto3Service } from '../../services/punto3.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-punto3',
  imports: [ CommonModule ],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css',
})
export class Punto3Component {
  cards: Array<Punto3>
  constructor(private punto3Service: Punto3Service, private router : Router ){
    this.cards = new Array<Punto3>;
  }
  
  ngOnInit() {
    this.cards = this.punto3Service.cards;
  }

}
