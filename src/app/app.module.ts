import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NcmeComponenteComponent } from './nome-componente/nome-componente.component';
import { ServicoService } from './servico.service';

@NgModule({
  declarations: [
    AppComponent,
    NcmeComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
