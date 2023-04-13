import { Component } from '@angular/core';
import { CursosService } from '../cursos-Services/service';

@Component({
  selector: 'app-galeria-cursos',
  templateUrl: './galeria-cursos.component.html',
  styleUrls: ['./galeria-cursos.component.css']
})
export class GaleriaCursosComponent{

 constructor (private service:CursosService){}
 lista:any=this.service.listaCursos

}
