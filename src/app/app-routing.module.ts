import { GradeAlunoComponent } from './grade-aluno/grade-aluno.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginCoordenadorComponent } from './login-coordenador/login-coordenador.component'; // Certifique-se de que o caminho esteja correto
import { InicialCoordenadorComponent } from './inicial-coordenador/inicial-coordenador.component';
import { HistoricoComponent } from './historico/historico.component';
import { GradeProfessorComponent } from './grade-professor/grade-professor.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login-coordenador', component: LoginCoordenadorComponent },
  {path: 'inicial-coordenador', component: InicialCoordenadorComponent},
  { path: 'cadastrar-professor', component: CadastrarProfessorComponent },
  {path: 'historico', component: HistoricoComponent},
  {path: 'grade-aluno', component: GradeAlunoComponent},
  {path: 'grade-professor', component: GradeProfessorComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
