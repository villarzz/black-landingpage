import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { TitleComponent } from './title/title.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { CardComponent } from './card/card.component';
import { BtnGetStartedComponent } from './btn-get-started/btn-get-started.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CabecalhoComponent,
        TitleComponent,
        NossosServicosComponent,
        CardComponent,
        BtnGetStartedComponent
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
  });
});
