import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atendimento } from './atendimento';

describe('Atendimento', () => {
  let component: Atendimento;
  let fixture: ComponentFixture<Atendimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atendimento],
    }).compileComponents();

    fixture = TestBed.createComponent(Atendimento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
