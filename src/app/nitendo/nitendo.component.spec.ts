import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitendoComponent } from './nitendo.component';

describe('NitendoComponent', () => {
  let component: NitendoComponent;
  let fixture: ComponentFixture<NitendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NitendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NitendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
