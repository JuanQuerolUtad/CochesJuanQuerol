import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coche6Component } from './coche6.component';

describe('Coche6Component', () => {
  let component: Coche6Component;
  let fixture: ComponentFixture<Coche6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Coche6Component]
    });
    fixture = TestBed.createComponent(Coche6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
