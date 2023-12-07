import { TestBed } from '@angular/core/testing';

import { CadastrarProfessorService } from './cadastrar-professor.service';

describe('CadastrarProfessorService', () => {
  let service: CadastrarProfessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarProfessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
