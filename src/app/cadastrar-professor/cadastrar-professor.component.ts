import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastrarprofessorService } from '../cadastrar-professor.service';
import { CadastrarProfessor } from '../cadastrar-professor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.scss'],
})
export class CadastrarProfessorComponent implements OnInit {
  cadastrarProfessor: CadastrarProfessor[] = [];
  isEditing = false;
  formGroupCadastrarProfessor: FormGroup;

  constructor(
  private router: Router,
    private cadastrarProfessorService: CadastrarprofessorService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupCadastrarProfessor = formBuilder.group({
      id: [''],
      nome: [''],
      sala: [''],
      data: [''],
      curso: [''],
      materia: [''],
      horario: [''],
    });
  }

  ngOnInit(): void {
    this.loadProfessor();
  }

  loadProfessor() {
    this.cadastrarProfessorService.getProfessor().subscribe({
      next: data => (this.cadastrarProfessor = data),
    });
  }

  save() {
    if (this.isEditing) {
      this.cadastrarProfessorService.update(this.formGroupCadastrarProfessor.value).subscribe({
        next: () => {
          this.loadProfessor();
          this.formGroupCadastrarProfessor.reset();
          this.isEditing = false;
        },
      });
    } else {
      this.cadastrarProfessorService.save(this.formGroupCadastrarProfessor.value).subscribe({
        next: data => {
          this.cadastrarProfessor.push(data);
          this.formGroupCadastrarProfessor.reset();
        },
      });
    }
  }

  clean() {
    this.formGroupCadastrarProfessor.reset();
    this.isEditing = false;
  }

  edit(cadastrarProfessor: CadastrarProfessor) {
    this.formGroupCadastrarProfessor.setValue(cadastrarProfessor);
    this.isEditing = true;
  }

  delete(cadastrarProfessor: CadastrarProfessor) {
    this.cadastrarProfessorService.delete(cadastrarProfessor).subscribe({
      next: () => this.loadProfessor(),
    });
  }
  goToBack() {
    this.router.navigate(['/inicial-coordenador']);
  }
  goToGradeProfessor() {
    this.router.navigate(['/grade-professor']);
  }
}
