import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteCuatroPage } from './componente-cuatro.page';

describe('ComponenteCuatroPage', () => {
  let component: ComponenteCuatroPage;
  let fixture: ComponentFixture<ComponenteCuatroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
