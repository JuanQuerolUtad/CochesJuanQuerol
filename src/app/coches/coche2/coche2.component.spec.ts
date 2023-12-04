import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coche2Component } from './coche2.component';

describe('Coche2Component', () => {
  let component: Coche2Component;
  let fixture: ComponentFixture<Coche2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Coche2Component]
    });
    fixture = TestBed.createComponent(Coche2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
