import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteDiezPage } from './componente-diez.page';

describe('ComponenteDiezPage', () => {
  let component: ComponenteDiezPage;
  let fixture: ComponentFixture<ComponenteDiezPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDiezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
