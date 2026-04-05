import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoricoPage } from './list-historico-page';

describe('ListHistoricoPage', () => {
  let component: ListHistoricoPage;
  let fixture: ComponentFixture<ListHistoricoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHistoricoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListHistoricoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
