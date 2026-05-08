import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // permite que el servicio se use en toda la app
})
export class Punto1Service {
  
  private eventos: Array<any> = [
    { nombre: 'Yoga', descripcion: 'Clase relajante', img: 'yoga.jpg' },
    { nombre: 'Música', descripcion: 'Recital en vivo', img: 'musica.jpg' },
    { nombre: 'Maratón', descripcion: 'Carrera 10K', img: 'maraton.jpg' }
  ];

  constructor() { }

  // Método para que el componente obtenga los eventos
  getEventos() {
    return this.eventos;
  }
}