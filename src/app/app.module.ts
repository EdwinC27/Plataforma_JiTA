import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { TableroCursosComponent } from './tablero-cursos/tablero-cursos.component';
import { GaleriaCursosComponent } from './galeria-cursos/galeria-cursos.component';
import { InfoCursoComponent } from './info-curso/info-curso.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    TableroCursosComponent,
    GaleriaCursosComponent,
    InfoCursoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
