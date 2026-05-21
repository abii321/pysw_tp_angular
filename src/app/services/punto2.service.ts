import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Punto2Service {

  // Movimos el array de productos aquí para centralizar la información
  private productos: Array<any> = [
    { nombre: 'Notebook Asus 13L', descripcion: 'Disco 40GB, 15 pulgadas', img: 'assets/images/punto2/Notebook Asus 13L.jpg', precio: 45000, descuento: 0 },
    { nombre: 'Monitor LG 14', descripcion: 'Texto descriptivo producto 02', img: 'assets/images/punto2/Monitor LG 14.jpg', precio: 99000, descuento: 0 },
    { nombre: 'Teclado Mecánico', descripcion: 'Switch Red, RGB', img: 'assets/images/punto2/Teclado Mecánico.jpg', precio: 15000, descuento: 0 },
    { nombre: 'Mouse Logitech', descripcion: 'Inalámbrico, 4000 DPI', img: 'assets/images/punto2/Mouse Logitech.jpg', precio: 8500, descuento: 0 }
  ];

  constructor() { }

  // Método para que el componente obtenga los productos
  getProductos() {
    return this.productos;
  }
}