import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaCursosComponent } from './galeria-cursos/galeria-cursos.component';
import { InfoCursoComponent } from './info-curso/info-curso.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TableroCursosComponent } from './tablero-cursos/tablero-cursos.component';

const routes: Routes = [
  {
  path:"galeria/:id",
  component:GaleriaCursosComponent
  },
  {
    path: "tablero/:id",
    component: TableroCursosComponent
  },
  {
    path: "perfil/:id",
    component: PerfilComponent
  },
  {
    path:"info/:idUsuario/:id/:index",
    component:InfoCursoComponent
  },
  {
    path: "",
    component: IniciarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
