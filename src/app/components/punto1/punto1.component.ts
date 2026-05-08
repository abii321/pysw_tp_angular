import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Punto1Service } from '../../services/punto1.service'; // Importamos el servicio

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  eventos: Array<any> = []; // empieza vacío
  indice: number = 0;

  // Inyectamos el servicio en el constructor
  constructor(private punto1Service: Punto1Service) {
    // Le pedimos los datos al servicio al iniciar
    this.eventos = this.punto1Service.getEventos();
  }

  siguiente() {
    if (this.indice < this.eventos.length - 1) {
      this.indice++;
    }
  }

  anterior() {
    if (this.indice > 0) {
      this.indice--;
    }
  }
}