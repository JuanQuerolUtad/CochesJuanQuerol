import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coche1Component } from './coche1.component';

describe('Coche1Component', () => {
  let component: Coche1Component;
  let fixture: ComponentFixture<Coche1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Coche1Component]
    });
    fixture = TestBed.createComponent(Coche1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
