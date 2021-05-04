import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewXboxComponent } from './cart-view-xbox.component';

describe('CartViewXboxComponent', () => {
  let component: CartViewXboxComponent;
  let fixture: ComponentFixture<CartViewXboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartViewXboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewXboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
