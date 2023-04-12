import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaCursosComponent } from './galeria-cursos/galeria-cursos.component';
import { TableroCursosComponent } from './tablero-cursos/tablero-cursos.component';

const routes: Routes = [
  {
  path:"galeria",
  component:GaleriaCursosComponent
  },
  {
    path: "tablero",
    component: TableroCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
