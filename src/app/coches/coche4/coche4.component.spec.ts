import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coche4Component } from './coche4.component';

describe('Coche4Component', () => {
  let component: Coche4Component;
  let fixture: ComponentFixture<Coche4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Coche4Component]
    });
    fixture = TestBed.createComponent(Coche4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
