import { Component } from '@angular/core';
import { CursosService } from '../cursos-Services/service';

@Component({
  selector: 'app-tablero-cursos',
  templateUrl: './tablero-cursos.component.html',
  styleUrls: ['./tablero-cursos.component.css']
})
export class TableroCursosComponent {
  constructor (private service:CursosService){}
  images:any=this.service.listaCursos
}
