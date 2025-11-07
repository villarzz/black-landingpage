import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BtnGetStartedComponent } from './btn-get-started/btn-get-started.component';
import { TitleComponent } from './title/title.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BtnGetStartedComponent,
    TitleComponent,
    NossosServicosComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
