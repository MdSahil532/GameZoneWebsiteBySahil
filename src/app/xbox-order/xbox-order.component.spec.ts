import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxOrderComponent } from './xbox-order.component';

describe('XboxOrderComponent', () => {
  let component: XboxOrderComponent;
  let fixture: ComponentFixture<XboxOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
