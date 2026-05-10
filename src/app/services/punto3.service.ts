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
      //{ id:0, url: 'assets/images/card0.jpg', encontrada: true, },
      { id:1, url: 'assets/images/punto3/card1.jpg', vuelta:false, },
      { id:2, url: 'assets/images/punto3/card2.jpg', vuelta:false, },
      { id:3, url: 'assets/images/punto3/card3.jpg', vuelta:false, }, 
      { id:4, url: 'assets/images/punto3/card4.jpg', vuelta:false, },
      { id:5, url: 'assets/images/punto3/card5.jpg', vuelta:false, },
      { id:6, url: 'assets/images/punto3/card6.jpg', vuelta:false, },
      { id:7, url: 'assets/images/punto3/card1.jpg', vuelta:false, },
      { id:8, url: 'assets/images/punto3/card2.jpg', vuelta:false, },
      { id:9, url: 'assets/images/punto3/card3.jpg', vuelta:false, }, 
      { id:10, url: 'assets/images/punto3/card4.jpg', vuelta:false, },
      { id:11, url: 'assets/images/punto3/card5.jpg', vuelta:false, },
      { id:12, url: 'assets/images/punto3/card6.jpg', vuelta:false, }
    ]
  }

  initGame(){
    // orden aleatorio
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // indice aleat
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
    }

    //this.cards.forEach( c => { c.encontrada=false; });
  }

  endGame(){
    this.cards.forEach(c => { c.vuelta = false; });
  }
}
