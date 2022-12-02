import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './claseLista/lista/lista.component';
import { ListaAlumnoDirective } from './classLis/lista-alumno.directive';
import { PipePipe } from './claseLista/pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAlumnoDirective,
    PipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
