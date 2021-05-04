import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewNitendoComponent } from './cart-view-nitendo.component';

describe('CartViewNitendoComponent', () => {
  let component: CartViewNitendoComponent;
  let fixture: ComponentFixture<CartViewNitendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartViewNitendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewNitendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
