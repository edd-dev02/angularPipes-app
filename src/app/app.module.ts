import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

// Configuración del locale de la app
import localeEsMX from '@angular/common/locales/es-MX'
import localeFrCA from '@angular/common/locales/fr-CA'

// Funcion para establecer el o los idiomas que manejaremos en la aplicación
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEsMX );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      // Idioma por defecto establecido
      provide: LOCALE_ID, useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
