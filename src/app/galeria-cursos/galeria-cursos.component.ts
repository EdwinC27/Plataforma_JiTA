import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos-Services/service';
import { Users } from '../users/users.service';

@Component({
  selector: 'app-galeria-cursos',
  templateUrl: './galeria-cursos.component.html',
  styleUrls: ['./galeria-cursos.component.css']
})
export class GaleriaCursosComponent{

  constructor (private service:CursosService, private user:Users, private router: ActivatedRoute){}

  lista:any=this.service.listaCursos

  id:any;
  usuario:any;

  nombre:any;
  img:any;
  cursos:any;

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    this.usuario = this.user.listaUsers[this.id]

    this.nombre = this.usuario["usuario"];
    this.img = this.usuario["img"]

  }
}
