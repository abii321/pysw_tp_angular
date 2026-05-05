import { Injectable } from '@angular/core';
import { Punto3 } from '../models/punto3.class';

@Injectable({
  providedIn: 'root',
})
export class Punto3Service {
  cards: Array<Punto3>;

  constructor(){
    this.cards = new Array<Punto3>();
    this.cards = [
      { id:1, url: 'assets/images/card1.jpg', encontrada: false, },
      { id:2, url: 'assets/images/card2.jpg', encontrada: false, },
      { id:3, url: 'assets/images/card3.jpg', encontrada: false, }, 
      { id:4, url: 'assets/images/card4.jpg', encontrada: false, },
      { id:5, url: 'assets/images/card5.jpg', encontrada: false, },
      { id:6, url: 'assets/images/card6.jpg', encontrada: false, },
      { id:7, url: 'assets/images/card1.jpg', encontrada: false, },
      { id:8, url: 'assets/images/card2.jpg', encontrada: false, },
      { id:9, url: 'assets/images/card3.jpg', encontrada: false, }, 
      { id:10, url: 'assets/images/card4.jpg', encontrada: false, },
      { id:11, url: 'assets/images/card5.jpg', encontrada: false, },
      { id:12, url: 'assets/images/card6.jpg', encontrada: false, }
    ]
  }

  
}
