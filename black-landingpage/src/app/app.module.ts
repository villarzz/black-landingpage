import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BtnGetstarttedComponent } from './btn-getstartted/btn-getstartted.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BtnGetstarttedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
