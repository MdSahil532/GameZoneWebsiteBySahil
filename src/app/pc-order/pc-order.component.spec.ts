import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcOrderComponent } from './pc-order.component';

describe('PcOrderComponent', () => {
  let component: PcOrderComponent;
  let fixture: ComponentFixture<PcOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
