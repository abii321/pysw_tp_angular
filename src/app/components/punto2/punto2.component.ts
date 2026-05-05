import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  // Array predefinido de productos destacados
  productos = [
    { nombre: 'Notebook Asus 13L', descripcion: 'Disco 40GB, 15 pulgadas', img: 'assets/images/punto2/Notebook Asus 13L.jpg', precio: 45000 },
    { nombre: 'Monitor LG 14', descripcion: 'Texto descriptivo producto 02', img: 'assets/images/punto2/Monitor LG 14.jpg', precio: 99000 },
    { nombre: 'Teclado Mecánico', descripcion: 'Switch Red, RGB', img: 'assets/images/punto2/Teclado Mecánico.jpg', precio: 15000 },
    { nombre: 'Mouse Logitech', descripcion: 'Inalámbrico, 4000 DPI', img: 'assets/images/punto2/Mouse Logitech.jpg', precio: 8500 }
  ];

  // Array para representar el carrito
  carrito: any[] = [];
  total: number = 0;

  // Función para agregar al carrito
  agregarAlCarrito(producto: any) {
    // Verificamos si ya existe para cumplir la regla: "solo se agrega UN SOLO producto"
    const existe = this.carrito.find(item => item.nombre === producto.nombre);
    
    if (!existe) {
      this.carrito.push(producto);
      this.calcularTotal();
    } else {
      alert('Este producto ya está en el carrito.');
    }
  }

  // Función para calcular el total a abonar
  calcularTotal() {
    this.total = this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }
}