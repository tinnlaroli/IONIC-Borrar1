import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteSietePage } from './componente-siete.page';

describe('ComponenteSietePage', () => {
  let component: ComponenteSietePage;
  let fixture: ComponentFixture<ComponenteSietePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSietePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
