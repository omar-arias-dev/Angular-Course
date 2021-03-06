import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/**
 * Tarea:
 *  Crearn módulo llamado ContadorModule
 *  declaraciones y exportaciones
 */

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { NarutoModule } from './naruto/naruto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar aquí
    ContadorModule,
    NarutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
