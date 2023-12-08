import { TestBed } from '@angular/core/testing';

import { CadastrarprofessorService } from './cadastrar-professor.service';

describe('CadastrarProfessorService', () => {
  let service: CadastrarprofessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarprofessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
