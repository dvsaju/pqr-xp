import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPqrsComponent } from './login-pqrs.component';

describe('LoginPqrsComponent', () => {
  let component: LoginPqrsComponent;
  let fixture: ComponentFixture<LoginPqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
