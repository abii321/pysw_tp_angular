import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Se agregó NgForm
import { InscripcionService } from '../../services/parte2.services'; 
import { Inscripcion } from '../../models/parte2'; 
import { UniqueValueDirective } from '../../directivas/duplicado.directive'; // Asegúrate de importar tu directiva real

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule, FormsModule, UniqueValueDirective],
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {

  // Objeto para capturar los datos del formulario
  nuevaInscripcion: Inscripcion = new Inscripcion();

  // Array para mostrar en la tabla
  listaInscripciones: Array<Inscripcion> = [];

  // Variables para el resumen
  resumen = {
    estudiantes: 0,
    egresados: 0,
    particulares: 0,
    totalMonto: 0
  };

  // Inyección de dependencias del servicio
  constructor(private inscripcionService: InscripcionService) { }

  ngOnInit(): void {
    // Al iniciar, cargamos la lista (vacía por defecto)
    this.obtenerLista();
  }

  // Evento gatillado por el cambio (change) en categoría o precio
  calcularTotal(): void {
    if (this.nuevaInscripcion.precio > 0 && this.nuevaInscripcion.categoriaAlumno !== '') {
      this.nuevaInscripcion.precioFinal = this.inscripcionService.calcularDescuento(
        this.nuevaInscripcion.precio,
        this.nuevaInscripcion.categoriaAlumno
      );
    }
  }

  // Registra el array usando el service, recibe el formulario completo para validarlo
  registrar(formInscripcion: NgForm): void {
    // Validación extra por si se vulnera el HTML
    if (formInscripcion.invalid) {
      // Forzamos a marcar todos los campos como "tocados" para que se muestren los errores
      Object.values(formInscripcion.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
      this.nuevaInscripcion.fechaInscripcion = new Date().toISOString();

      this.calcularTotal();
      this.inscripcionService.registrarInscripcion({ ...this.nuevaInscripcion });

      this.obtenerLista();
      this.actualizarResumen();
      this.nuevaInscripcion = new Inscripcion();
    }

    // Aseguramos de tener el cálculo final
    this.calcularTotal();

    // Enviamos una copia del objeto para evitar referencias dinámicas no deseadas
    this.inscripcionService.registrarInscripcion({ ...this.nuevaInscripcion });

    // Actualizamos la vista
    this.obtenerLista();
    this.actualizarResumen();

    // Limpiamos el formulario y los estados de error visuales de Bootstrap
    formInscripcion.resetForm();
    
    // Instanciamos un nuevo objeto limpio para el binding
    this.nuevaInscripcion = new Inscripcion();
    // Es posible que al resetear el select quede nulo, aseguramos que empiece vacío para el placeholder
    this.nuevaInscripcion.categoriaAlumno = ''; 
  }

  // Obtiene los datos desde el Service
  obtenerLista(): void {
    this.listaInscripciones = this.inscripcionService.getInscripciones();
  }

  // Actualiza los cálculos del resumen inferior
  actualizarResumen(): void {
    this.resumen.estudiantes = this.listaInscripciones.filter(i => i.categoriaAlumno === '1').length;
    this.resumen.egresados = this.listaInscripciones.filter(i => i.categoriaAlumno === '2').length;
    this.resumen.particulares = this.listaInscripciones.filter(i => i.categoriaAlumno === '3').length;

    // Reduce para sumar todos los precios finales
    this.resumen.totalMonto = this.listaInscripciones.reduce((acc, current) => acc + current.precioFinal, 0);
  }
}