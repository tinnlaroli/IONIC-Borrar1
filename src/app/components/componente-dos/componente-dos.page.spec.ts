import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteDosPage } from './componente-dos.page';

describe('ComponenteDosPage', () => {
  let component: ComponenteDosPage;
  let fixture: ComponentFixture<ComponenteDosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
