import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NossosServicosComponent } from './nossos-servicos.component';
import { CardComponent } from '../card/card.component';
import { CryptoCardService } from '../services/crypto-card.service';
import { of } from 'rxjs';

describe('NossosServicosComponent', () => {
  let component: NossosServicosComponent;
  let fixture: ComponentFixture<NossosServicosComponent>;
  let service: CryptoCardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NossosServicosComponent, CardComponent],
      providers: [CryptoCardService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NossosServicosComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CryptoCardService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cards from service on init', (done) => {
    spyOn(service, 'getCards').and.returnValue(of([
      { bgColor: 'black', txtColor: 'white', category: 'CRYPTO', platform: 'Test', title: 'Test', description: 'Test' }
    ]));
    
    fixture.detectChanges();
    
    component.ngOnInit();
    
    setTimeout(() => {
      expect(component.cards.length).toBe(1);
      done();
    }, 0);
  });

  it('should render card components', () => {
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const cardElements = compiled.querySelectorAll('app-card');
    expect(cardElements.length).toBe(3);
  });
});
