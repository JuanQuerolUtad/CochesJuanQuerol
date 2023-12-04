import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coche3Component } from './coche3.component';

describe('Coche3Component', () => {
  let component: Coche3Component;
  let fixture: ComponentFixture<Coche3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Coche3Component]
    });
    fixture = TestBed.createComponent(Coche3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
