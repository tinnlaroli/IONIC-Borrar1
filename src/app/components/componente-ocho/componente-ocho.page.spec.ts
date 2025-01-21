import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteOchoPage } from './componente-ocho.page';

describe('ComponenteOchoPage', () => {
  let component: ComponenteOchoPage;
  let fixture: ComponentFixture<ComponenteOchoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteOchoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
