import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewPsComponent } from './cart-view-ps.component';

describe('CartViewPsComponent', () => {
  let component: CartViewPsComponent;
  let fixture: ComponentFixture<CartViewPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartViewPsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
