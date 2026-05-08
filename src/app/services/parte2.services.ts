import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/parte2/parte2'; // Importamos el modelo

@Injectable({
    providedIn: 'root'
})
export class InscripcionService {
    // El Array que gestionará las operaciones del CRUD 
    private listaInscripciones: Array<Inscripcion> = [];

    constructor() { }

    // C - Create: Guardar una nueva inscripción [cite: 64]
    registrarInscripcion(nueva: Inscripcion) {
        this.listaInscripciones.push(nueva);
    }

    // R - Read: Obtener todas las inscripciones [cite: 66]
    getInscripciones(): Array<Inscripcion> {
        return this.listaInscripciones;
    }

    // Lógica de Negocio: Cálculo de descuentos [cite: 60]
    calcularDescuento(precio: number, categoria: string): number {
        let total = precio;
        if (categoria === '1') { // Estudiante: 35% de descuento
            total = precio * 0.65;
        } else if (categoria === '2') { // Egresado: 50% de descuento
            total = precio * 0.50;
        }
        return total;
    }
}