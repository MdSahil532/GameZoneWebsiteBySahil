import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsOrderComponent } from './ps-order.component';

describe('PsOrderComponent', () => {
  let component: PsOrderComponent;
  let fixture: ComponentFixture<PsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
