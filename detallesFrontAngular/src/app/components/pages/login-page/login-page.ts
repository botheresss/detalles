import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';





@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(
    private auth: Auth,
    private router: Router,
    private http: HttpClient
  ) { }

  email = '';
  password = '';
  error = '';

  login() {
    this.http.post(environment.apiUrl + '/usuarios/login', {
      email: this.email,
      password: this.password
    })
      .subscribe((respuesta: any) => {

        console.log('Respuesta backend:', respuesta);

        const usuario = {
          nombre: respuesta.nombre,
          email: respuesta.email,
          rol: respuesta.rol
        };

        const token = respuesta.token;

        this.auth.login(usuario, token);

        this.router.navigate(['/']);

      });
  }


}
