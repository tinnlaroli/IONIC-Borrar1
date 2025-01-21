import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteTresPage } from './componente-tres.page';

describe('ComponenteTresPage', () => {
  let component: ComponenteTresPage;
  let fixture: ComponentFixture<ComponenteTresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
