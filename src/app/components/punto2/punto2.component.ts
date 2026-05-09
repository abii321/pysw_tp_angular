import { Component, OnInit } from '@angular/core'; // Añadimos OnInit
import { CommonModule } from '@angular/common';
import { Punto2Service } from '../../services/punto2.service'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component implements OnInit {
  productos: Array<any> = []; // Ahora el array empieza vacío
  carrito: any[] = [];
  total: number = 0;

  // Inyectamos el servicio en el constructor
  constructor(private punto2Service: Punto2Service) { }

  ngOnInit(): void {
    // Al iniciar el componente, traemos los datos del servicio
    this.productos = this.punto2Service.getProductos();
  }

  agregarAlCarrito(producto: any) {
    const existe = this.carrito.find(item => item.nombre === producto.nombre);
    if (!existe) {
      this.carrito.push(producto);
      this.calcularTotal();
    } else {
      alert('Este producto ya está en el carrito.');
    }
  }

  quitarDelCarrito(indice: number) {
    this.carrito.splice(indice, 1);
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }
}