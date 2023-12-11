import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial-coordenador',
  templateUrl: './inicial-coordenador.component.html',
  styleUrls: ['./inicial-coordenador.component.scss'],
})
export class InicialCoordenadorComponent  {

    constructor(private router: Router) {}

    goToCadastrarProfessor() {
        this.router.navigate(['/cadastrar-professor']);
    }
    goToHistorico() {
      this.router.navigate(['/historico']);
  }
  goToGradeProfessor() {
    this.router.navigate(['/grade-professor']);
}
goToGradeAluno() {
  this.router.navigate(['/grade-aluno']);
}
goToBack() {
  this.router.navigate(['/login-coordenador']);
}
}
