import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  cart = inject(CartService);

  productos = this.cart.productos;

  total = computed(() =>
    this.productos().reduce((acc, p) => acc + p.precio, 0)
  );

  cerrar() {
    this.cart.cerrar();
  }

  eliminar(p: any) {
    this.cart.eliminar(p);
  }
}
