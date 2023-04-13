import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaCursosComponent } from './galeria-cursos/galeria-cursos.component';
import { InfoCursoComponent } from './info-curso/info-curso.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TableroCursosComponent } from './tablero-cursos/tablero-cursos.component';

const routes: Routes = [
  {
  path:"galeria",
  component:GaleriaCursosComponent
  },
  {
    path: "tablero",
    component: TableroCursosComponent
  },
  {
    path: "perfil",
    component: PerfilComponent
  },
  {
    path:"info",
    component:InfoCursoComponent
  },
  {
    path: "iniciar_sesion",
    component: IniciarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
