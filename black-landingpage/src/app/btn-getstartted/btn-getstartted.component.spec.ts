import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGetstarttedComponent } from './btn-getstartted.component';

describe('BtnGetstarttedComponent', () => {
  let component: BtnGetstarttedComponent;
  let fixture: ComponentFixture<BtnGetstarttedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnGetstarttedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnGetstarttedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
