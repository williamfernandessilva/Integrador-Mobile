import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-coordenador',
  templateUrl: './login-coordenador.component.html',
  styleUrls: ['./login-coordenador.component.scss'],
})
export class LoginCoordenadorComponent   {
  constructor(private router: Router) {}

    goToInicialCoordenador() {
        this.router.navigate(['/inicial-coordenador']);
    }

}
