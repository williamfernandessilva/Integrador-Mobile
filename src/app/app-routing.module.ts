import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginCoordenadorComponent } from './login-coordenador/login-coordenador.component'; // Certifique-se de que o caminho esteja correto
import { InicialCoordenadorComponent } from './inicial-coordenador/inicial-coordenador.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login-coordenador', component: LoginCoordenadorComponent },
  {path: 'inicial-coordenador', component: InicialCoordenadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
