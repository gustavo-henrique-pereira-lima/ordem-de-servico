import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeDevedores } from './lista-de-devedores';

describe('ListaDeDevedores', () => {
  let component: ListaDeDevedores;
  let fixture: ComponentFixture<ListaDeDevedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeDevedores],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeDevedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
