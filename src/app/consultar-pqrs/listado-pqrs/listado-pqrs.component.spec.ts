import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPqrsComponent } from './listado-pqrs.component';

describe('ListadoPqrsComponent', () => {
  let component: ListadoPqrsComponent;
  let fixture: ComponentFixture<ListadoPqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
