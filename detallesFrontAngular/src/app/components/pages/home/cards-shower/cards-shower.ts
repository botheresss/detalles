import { Component, Signal, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './card/card';
import { ProductsService } from '../../../../services/products';
import { Producto } from '../../../../interfaces/producto';
import { CartService } from '../../../../services/cart';
import { Auth } from '../../../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cards-shower',
  standalone: true,
  imports: [CommonModule, Card, FormsModule],
  templateUrl: './cards-shower.html',
  styleUrl: './cards-shower.css',
})
export class CardsShower {

  productos!: Signal<Producto[]>;

  esAdmin = false;

  constructor(
    private productsService: ProductsService,
    private cart: CartService,
    public auth: Auth,
    private router: Router
  ) {
    this.productos = this.productsService.productosFiltrados;
    this.productsService.cargarProductos();

    this.esAdmin = this.auth.esAdmin();
    console.log('¿Es admin?', this.auth.esAdmin());

  }

  productoSeleccionado: Producto | null = null;
  popupAbierto = false;

  abrirPopup(producto: Producto) {
    this.productoSeleccionado = producto;
    this.popupAbierto = true;
  }

  cerrarPopup() {
    this.popupAbierto = false;
    this.productoSeleccionado = null;
  }

  agregarAlCarrito() {

    if (!this.productoSeleccionado) return;

    if (!this.auth.isLogged()) {
      this.cerrarPopup();
      this.router.navigate(['/login']);
      return;
    }

    this.cart.agregar(this.productoSeleccionado);
    console.log('Agregado al carrito');
    this.cerrarPopup();
    this.cart.dispararAnimacion();
  }

  editando = false;
  productoEditando: Producto | null = null;


  abrirEdicion(producto: Producto) {
    this.productoEditando = { ...producto }; // copia segura
    this.editando = true;
  }


  cerrarEdicion() {
    this.editando = false;
    this.productoEditando = null;
  }

  guardarEdicion() {

    if (!this.productoEditando) return;

    if (this.modoCrear) {

      this.productsService.crearProducto(this.productoEditando)
        .subscribe(() => {
          console.log('Producto creado');
          this.productsService.cargarProductos();
          this.cerrarEdicion();
        });

    } else {

      this.productsService.actualizarProducto(this.productoEditando)
        .subscribe(() => {
          console.log('Producto editado');
          this.productsService.cargarProductos();
          this.cerrarEdicion();
        });

    }

  }


  eliminarProducto(producto: Producto) {

    const confirmar = confirm(`¿Eliminar "${producto.nombre}"?`);

    if (!confirmar) return;

    const productId = producto._id || producto.id;
    this.productsService.eliminarProducto(productId.toString())
      .subscribe(() => {
        console.log('Producto eliminado', producto);
        this.productsService.cargarProductos();
      });
  }

  modoCrear = false;


  abrirCrearProducto() {
    this.productoSeleccionado = {
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      imagen: '',
      categoria: '',
      _id: undefined
    };

    this.modoCrear = true;
    this.popupAbierto = true;
  }

  guardarProducto() {

    if (!this.productoSeleccionado) return;

    if (this.modoCrear) {

      this.productsService.crearProducto(this.productoSeleccionado)
        .subscribe(() => {
          console.log('Producto creado');
          this.productsService.cargarProductos();
          this.cerrarPopup();
        });

    } else {

      this.productsService.actualizarProducto(this.productoSeleccionado)
        .subscribe(() => {
          console.log('Producto editado');
          this.productsService.cargarProductos();
          this.cerrarPopup();
        });

    }



  }

  abrirCrear() {

    this.productoEditando = {
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      imagen: '',
      categoria: '',
      _id: undefined
    };

    this.modoCrear = true;
    this.editando = true;
  }

  @ViewChild('cardsContainer') container!: ElementRef;

  ngAfterViewInit() {
    console.time('dom-render');

    requestAnimationFrame(() => {
      console.timeEnd('dom-render');
    });
  }

}