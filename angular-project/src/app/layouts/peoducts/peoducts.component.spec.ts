import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoductsComponent } from './peoducts.component';

describe('PeoductsComponent', () => {
  let component: PeoductsComponent;
  let fixture: ComponentFixture<PeoductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
