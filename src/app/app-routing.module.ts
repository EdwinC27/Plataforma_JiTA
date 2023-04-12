import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaCursosComponent } from './galeria-cursos/galeria-cursos.component';

const routes: Routes = [
  {
  path:"galeria",
  component:GaleriaCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
