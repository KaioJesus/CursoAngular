import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteAllComponent } from './button-delete-all.component';

describe('ButtonDeleteAllComponent', () => {
  let component: ButtonDeleteAllComponent;
  let fixture: ComponentFixture<ButtonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(ButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
