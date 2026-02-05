import { Injectable, signal, computed } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({ providedIn: 'root' })
export class CartService {

  productos = signal<Producto[]>([]);

  total = computed(() =>
    this.productos().reduce((acc, p) => acc + p.precio, 0)
  );

  agregar(producto: Producto) {
    this.productos.update(lista => [...lista, producto]);
  }

  eliminar(producto: Producto) {
    this.productos.update(lista => lista.filter(p => p !== producto));
  }

  carritoAbierto = signal(false);

  abrir() { this.carritoAbierto.set(true); }
  cerrar() { this.carritoAbierto.set(false); }

  animacionCarrito = signal(false);

  dispararAnimacion() {
    this.animacionCarrito.set(true);
    setTimeout(() => this.animacionCarrito.set(false), 350);
  }

}
