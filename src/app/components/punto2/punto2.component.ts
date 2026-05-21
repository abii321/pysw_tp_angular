import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Punto2Service } from '../../services/punto2.service';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component implements OnInit {
  productos: Array<any> = [];
  carrito: any[] = [];
  total: number = 0;

  constructor(private punto2Service: Punto2Service) { }

  ngOnInit(): void {
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

  // --- NUEVAS FUNCIONES PARA EL DESCUENTO ---

  aplicarDescuento(producto: any) {
    // Pedimos el porcentaje mediante un prompt
    const input = prompt(`Ingrese el % de descuento para ${producto.nombre} (0-100):`, producto.descuento.toString());
    
    if (input !== null) {
      let desc = parseFloat(input);
      // Validamos que sea un número entre 0 y 100
      if (!isNaN(desc) && desc >= 0 && desc <= 100) {
        producto.descuento = desc;
        this.calcularTotal(); // Recalculamos el total por si el producto ya estaba en el carrito
      } else {
        alert('Por favor, ingrese un porcentaje válido entre 0 y 100.');
      }
    }
  }

  calcularPrecioFinal(precio: number, descuento: number): number {
    return precio - (precio * (descuento / 100));
  }

  // --- FUNCIÓN ACTUALIZADA ---
  calcularTotal() {
    // Ahora sumamos el precio final (con descuento aplicado) en lugar del precio base
    this.total = this.carrito.reduce((acc, item) => acc + this.calcularPrecioFinal(item.precio, item.descuento), 0);
  }
}