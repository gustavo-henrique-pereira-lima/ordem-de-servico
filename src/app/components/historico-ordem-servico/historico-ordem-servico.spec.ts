import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoOrdemServico } from './historico-ordem-servico';

describe('HistoricoOrdemServico', () => {
  let component: HistoricoOrdemServico;
  let fixture: ComponentFixture<HistoricoOrdemServico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoOrdemServico],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricoOrdemServico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
