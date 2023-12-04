import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coche5Component } from './coche5.component';

describe('Coche5Component', () => {
  let component: Coche5Component;
  let fixture: ComponentFixture<Coche5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Coche5Component]
    });
    fixture = TestBed.createComponent(Coche5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
