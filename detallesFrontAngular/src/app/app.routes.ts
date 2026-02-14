import { Routes } from '@angular/router';
import { LoginPage } from './components/pages/login-page/login-page';
import { Home } from './components/pages/home/home';
import { Carrito } from './components/pages/home/carrito/carrito';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'login', component: LoginPage },
    { path: 'carrito', component: Carrito }
];
