import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  usuario = signal<any | null>(null);

  private API = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(usuario: any, token: string) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('token', token);
    this.usuario.set(usuario);
  }

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    this.usuario.set(null);
  }

  isLogged(): boolean {
    return this.getUsuario() !== null;
  }

  loadFromStorage() {
    const data = localStorage.getItem('usuario');
    if (data) {
      this.usuario.set(JSON.parse(data));
    }
  }



  getUsuario() {
    const raw = localStorage.getItem('usuario');

    if (!raw || raw === 'undefined') return null;

    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }


  esAdmin(): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
    return usuario?.rol === 'admin';
  }


}

