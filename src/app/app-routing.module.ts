import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Coche1Component } from './coches/coche1/coche1.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './coches/inicio/inicio.component';

const routes: Routes = [
  { path: 'coche1', component: Coche1Component },
  {path: '', component: InicioComponent},
  {path: 'coche2'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }