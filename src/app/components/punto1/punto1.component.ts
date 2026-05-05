import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css',
})
export class Punto1Component {

  eventos: Array<any> = [
    { nombre: 'Yoga', descripcion: 'Clase relajante', img: 'yoga.jpg' },
    { nombre: 'Música', descripcion: 'Concierto en vivo', img: 'musica.jpg' }
  ];

  indice: number = 0;

  siguiente() {
    // Solo sumamos si NO estamos en el último elemento
    if (this.indice < this.eventos.length - 1) {
      this.indice++;
    }
  }

  anterior() {
    // Solo restamos si NO estamos en el primero
    if (this.indice > 0) {
      this.indice--;
    }
  }
}