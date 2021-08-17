import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPqrsComponent } from './consultar-pqrs.component';

describe('ConsultarPqrsComponent', () => {
  let component: ConsultarPqrsComponent;
  let fixture: ComponentFixture<ConsultarPqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
