import { TestBed } from '@angular/core/testing';

import { OrdemServico } from '../services/ordem-servico';

describe('OrdemServico', () => {
  let service: OrdemServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdemServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
