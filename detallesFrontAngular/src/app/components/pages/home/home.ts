import { Component } from '@angular/core';
import { Header } from './header/header';
import { CardsShower } from './cards-shower/cards-shower';
import { Footer } from './footer/footer';
import { Banner } from "./banner/banner";
import { Carrito } from './carrito/carrito';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-home',
  imports: [Header, CardsShower, Footer, Banner, Carrito, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public cart: CartService) { }

}
