import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { AppRoutingModule } from './app-routing.module';
import { Coche1Component } from './coches/coche1/coche1.component';
import { InicioComponent } from './coches/inicio/inicio.component';
import { Coche2Component } from './coches/coche2/coche2.component';
import { Coche3Component } from './coches/coche3/coche3.component';
import { Coche4Component } from './coches/coche4/coche4.component';
import { Coche5Component } from './coches/coche5/coche5.component';
import { Coche6Component } from './coches/coche6/coche6.component';
import { CocheComponent } from './coche/coche.component';

@NgModule({
  declarations: [
    AppComponent,
    CaracteristicasComponent,
    Coche1Component,
    InicioComponent,
    Coche2Component,
    Coche3Component,
    Coche4Component,
    Coche5Component,
    Coche6Component,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
