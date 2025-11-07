import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BtnGetStartedComponent } from './btn-get-started/btn-get-started.component';
import { TitleComponent } from './title/title.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { CryptoTickerComponent } from './crypto-ticker/crypto-ticker.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BtnGetStartedComponent,
    TitleComponent,
    NossosServicosComponent,
    CardComponent,
    FooterComponent,
    NewsletterComponent,
    TestimonialsComponent,
    FaqComponent,
    CryptoTickerComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
