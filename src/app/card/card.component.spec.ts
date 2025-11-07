import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept and display input properties', () => {
    component.title = 'Bitcoin';
    component.bgColor = 'black';
    component.txtColor = 'white';
    component.category = 'CRYPTO';
    component.platform = 'Dashboard';
    component.description = 'Test description';
    
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toBe('Bitcoin');
    expect(compiled.querySelector('#category')?.textContent).toBe('CRYPTO');
    expect(compiled.querySelector('#platform')?.textContent).toBe('Dashboard');
    expect(compiled.querySelector('#description')?.textContent).toBe('Test description');
  });

  it('should have default empty values for all inputs', () => {
    expect(component.title).toBe('');
    expect(component.bgColor).toBe('');
    expect(component.txtColor).toBe('');
    expect(component.category).toBe('');
    expect(component.platform).toBe('');
    expect(component.description).toBe('');
  });

  it('should apply background color style', () => {
    component.bgColor = '#0d6efd';
    fixture.detectChanges();
    
    const card = fixture.nativeElement.querySelector('.card') as HTMLElement;
    expect(card.style.backgroundColor).toBe('rgb(13, 110, 253)');
  });
});
