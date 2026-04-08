import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMenu } from './mini-menu';

describe('MiniMenu', () => {
  let component: MiniMenu;
  let fixture: ComponentFixture<MiniMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
