import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteCincoPage } from './componente-cinco.page';

describe('ComponenteCincoPage', () => {
  let component: ComponenteCincoPage;
  let fixture: ComponentFixture<ComponenteCincoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
