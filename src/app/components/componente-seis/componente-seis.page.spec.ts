import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteSeisPage } from './componente-seis.page';

describe('ComponenteSeisPage', () => {
  let component: ComponenteSeisPage;
  let fixture: ComponentFixture<ComponenteSeisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSeisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
