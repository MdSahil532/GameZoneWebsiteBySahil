import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitendoOrderComponent } from './nitendo-order.component';

describe('NitendoOrderComponent', () => {
  let component: NitendoOrderComponent;
  let fixture: ComponentFixture<NitendoOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NitendoOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NitendoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
