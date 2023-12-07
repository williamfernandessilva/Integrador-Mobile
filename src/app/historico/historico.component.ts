import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export class HistoricoComponent  {
  constructor(private router: Router) {}

  goToInicalCoordenador() {
      this.router.navigate(['/inicial-coordenador']);
  }

}
