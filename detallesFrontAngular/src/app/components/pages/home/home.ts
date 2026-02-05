import { Component } from '@angular/core';
import { Header } from './header/header';
import { CardsShower } from './cards-shower/cards-shower';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, CardsShower, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
