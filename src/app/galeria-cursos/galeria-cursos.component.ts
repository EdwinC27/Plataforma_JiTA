import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CursosService } from '../cursos-Services/service';
import { Router } from "@angular/router";
import { Users } from '../users/users.service';

@Component({
  selector: 'app-galeria-cursos',
  templateUrl: './galeria-cursos.component.html',
  styleUrls: ['./galeria-cursos.component.css']
})
export class GaleriaCursosComponent{

  constructor (private service:CursosService, private user:Users, private router: ActivatedRoute,private router1:Router){}

  lista:any=this.service.listaCursos

  idUsuario:any;
  usuario:any;

  nombre:any;
  img:any;
  cursos:any;

  ngOnInit(): void {
    this.idUsuario = this.router.snapshot.paramMap.get("id");
    this.usuario = this.user.listaUsers[this.idUsuario]

    this.nombre = this.usuario["usuario"];
    this.img = this.usuario["img"]

  }
  enviarCurso(id: number) {
    this.router1.navigate(['/info',this.idUsuario,id,0])
   }
}
