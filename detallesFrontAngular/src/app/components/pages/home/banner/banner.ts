import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  constructor(private router: Router) { }

  scrollA(seccion: string) {
    const element = document.getElementById(seccion);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
