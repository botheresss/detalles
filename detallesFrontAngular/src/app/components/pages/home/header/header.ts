import { Component, inject, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../../services/cart';
import { Auth } from '../../../../services/auth';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../../services/products';
import { FormsModule } from '@angular/forms';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);
  public cart = inject(CartService);
  public auth = inject(Auth);
  public productsService = inject(ProductsService);
  public viewport = inject(ViewportScroller);

  isScrolled = false;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  busqueda = '';

  buscar() {
    this.productsService.setBusqueda(this.busqueda);
  }

  animarCarrito = this.cart.animacionCarrito;


  scrollA(id: string) {
    this.viewport.scrollToAnchor(id);
  }





}
