import { Component, ChangeDetectorRef } from '@angular/core';
import { Punto3 } from '../../models/punto3.class';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Punto3Service } from '../../services/punto3.service';

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
  fIndex : number = -1;
  sIndex : number = -1;  

  constructor(private punto3Service: Punto3Service, private router : Router, private cdr: ChangeDetectorRef   ){
    this.cards = new Array<Punto3>;
  }
  
  ngOnInit() {
    this.cards = this.punto3Service.cards;
  }

  iniciarJuego(){
    this.juegoActivo = true;
    this.punto3Service.initGame();
    this.finPartida = false;
    this.intentos = 14; // nro aleatorio ?
    this.pares = 0;

    this.cards = this.punto3Service.cards;
  }

  reiniciarJuego(){
    this.juegoActivo = false;
    this.finPartida = true;
    this.ganador = false;
    this.levantarHabilitado = 0;
    this.punto3Service.endGame();
    
    this.cards = this.punto3Service.cards;
  }

  intentarJuego(){
    if(this.levantarHabilitado!=0) return;

    this.levantarHabilitado=2;
    this.intentos--;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async darVueltaCard( card : Punto3, indice: number ){
    if (this.levantarHabilitado <= 0 || card.vuelta ) return;

    card.vuelta=true;  
    this.levantarHabilitado--;

    if(this.fIndex==-1) this.fIndex=indice;
    else this.sIndex=indice;
    

    if(this.levantarHabilitado==0){
      await this.delay(1500);
      let iguales = this.punto3Service.compararCartas(this.fIndex, this.sIndex);

      if(iguales) this.pares++;
      this.fIndex=-1; this.sIndex=-1;

      if(this.pares==6) {
        this.ganador=true;
        this.finPartida = true;
      }
      if(this.intentos==0) this.finPartida=true;

      this.cdr.detectChanges(); 
    }
    
  }
}
