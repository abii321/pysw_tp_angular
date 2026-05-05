import { Component, numberAttribute } from '@angular/core';
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
  cards: Array<Punto3>;
  juegoActivo: boolean = false;
  finPartida: boolean = true;
  ganador: boolean = false;
  intentos: number = 0;
  levantarHabilitado: number = 0;
  pares: number = 0;
  

  constructor(private punto3Service: Punto3Service, private router : Router ){
    this.cards = new Array<Punto3>;
  }
  
  ngOnInit() {
    this.cards = this.punto3Service.cards;
  }

  iniciarJuego(){
    this.juegoActivo = true;
    this.punto3Service.initGame();
    this.intentos = 12; // nro aleatorio ?
    this.ganador = false;
    this.pares = 0;

    this.cards = this.punto3Service.cards;
  }

  reiniciarJuego(){
    this.juegoActivo = false;
    this.finPartida = false;
    this.punto3Service.endGame();
    
    this.cards = this.punto3Service.cards;
  }

  intentarJuego(){
    this.levantarHabilitado=2;
    this.intentos--;
    if(this.intentos==-1) {
      this.juegoActivo=false;
      this.finPartida=true;
      this.finPartida=true;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  fIndex : number = -1;
  sIndex : number = -1;
  async darVueltaCard( card : Punto3, indice: number ){
    if (this.levantarHabilitado <= 0 || card.vuelta ) return;

    card.vuelta=true;  
    this.levantarHabilitado--;

    if(this.fIndex==-1) this.fIndex=indice;
    else this.sIndex=indice;
    

    if(this.levantarHabilitado==0){
      if( this.cards[this.fIndex].url != this.cards[this.sIndex].url){
        await this.delay(1000);
        this.cards[this.fIndex].vuelta = false;
        this.cards[this.sIndex].vuelta = false;
      }
      else this.pares++;
      this.fIndex=-1; this.sIndex==-1;
    }
    
    if(this.pares==6) this.ganador=true;
    
  }
}
