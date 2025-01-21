import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteUnoPage } from './componente-uno.page';

describe('ComponenteUnoPage', () => {
  let component: ComponenteUnoPage;
  let fixture: ComponentFixture<ComponenteUnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
