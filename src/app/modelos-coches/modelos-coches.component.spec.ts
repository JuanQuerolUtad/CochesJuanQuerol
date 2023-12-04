import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosCochesComponent } from './modelos-coches.component';

describe('ModelosCochesComponent', () => {
  let component: ModelosCochesComponent;
  let fixture: ComponentFixture<ModelosCochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelosCochesComponent]
    });
    fixture = TestBed.createComponent(ModelosCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
