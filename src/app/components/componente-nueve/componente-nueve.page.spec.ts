import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteNuevePage } from './componente-nueve.page';

describe('ComponenteNuevePage', () => {
  let component: ComponenteNuevePage;
  let fixture: ComponentFixture<ComponenteNuevePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNuevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
