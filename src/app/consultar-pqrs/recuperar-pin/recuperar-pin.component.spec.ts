import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarPinComponent } from './recuperar-pin.component';

describe('RecuperarPinComponent', () => {
  let component: RecuperarPinComponent;
  let fixture: ComponentFixture<RecuperarPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
