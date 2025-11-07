import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { TitleComponent } from './title/title.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { CardComponent } from './card/card.component';
import { BtnGetStartedComponent } from './btn-get-started/btn-get-started.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { CryptoTickerComponent } from './crypto-ticker/crypto-ticker.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        CabecalhoComponent,
        TitleComponent,
        NossosServicosComponent,
        CardComponent,
        BtnGetStartedComponent,
        FooterComponent,
        NewsletterComponent,
        TestimonialsComponent,
        FaqComponent,
        CryptoTickerComponent,
        ScrollToTopComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the main components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-cabecalho')).toBeTruthy();
    expect(compiled.querySelector('app-title')).toBeTruthy();
    expect(compiled.querySelector('app-nossos-servicos')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
