import { Component, signal } from '@angular/core';
import { Auth } from './services/auth';
import { RouterOutlet } from '@angular/router';
import { Carrito } from './components/pages/home/carrito/carrito';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carrito, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('detallesFront');
  constructor(public cart: CartService) { }








}





