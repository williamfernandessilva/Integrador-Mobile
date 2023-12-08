import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { CadastrarProfessor } from './cadastrar-professor.model';


@Injectable({
  providedIn: 'root'
})
export class CadastrarprofessorService {
  private url = "http://localhost:8080/professores";

  constructor(private http: HttpClient) { }

  getProfessor(): Observable<CadastrarProfessor[]> {
    return this.http.get<CadastrarProfessor[]>(this.url);
  }

  save(cadastrarprofessor: CadastrarProfessor): Observable<CadastrarProfessor> {
    return this.http.post<CadastrarProfessor>(this.url, cadastrarprofessor)
      .pipe(
        catchError(error => {
          if (error.status === 409) {
          }
          throw error;
        })
      );
  }


  update(cadastrarprofessor: CadastrarProfessor): Observable<CadastrarProfessor> {
    return this.http.put<CadastrarProfessor>(`${this.url}/${cadastrarprofessor.id}`, cadastrarprofessor);
  }

  delete(cadastrarprofessor: CadastrarProfessor): Observable<void> {
    return this.http.delete<void>(`${this.url}/${cadastrarprofessor.id}`);
  }
}
