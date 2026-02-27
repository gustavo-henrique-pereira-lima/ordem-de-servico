import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagIncial } from './pag-incial';

describe('PagIncial', () => {
  let component: PagIncial;
  let fixture: ComponentFixture<PagIncial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagIncial],
    }).compileComponents();

    fixture = TestBed.createComponent(PagIncial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
