import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGetStartedComponent } from './btn-get-started.component';

describe('BtnGetStartedComponent', () => {
  let component: BtnGetStartedComponent;
  let fixture: ComponentFixture<BtnGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnGetStartedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
