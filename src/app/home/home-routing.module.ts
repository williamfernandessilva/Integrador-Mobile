import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginCoordenadorComponent } from '../login-coordenador/login-coordenador.component';

const routes: Routes = [
  { path: 'login-coordenador', component: LoginCoordenadorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
