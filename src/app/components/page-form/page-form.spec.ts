import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForm } from './page-form';

describe('PageForm', () => {
  let component: PageForm;
  let fixture: ComponentFixture<PageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PageForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
