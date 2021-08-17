import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrCardComponent } from './pqr-card.component';

describe('PqrCardComponent', () => {
  let component: PqrCardComponent;
  let fixture: ComponentFixture<PqrCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
