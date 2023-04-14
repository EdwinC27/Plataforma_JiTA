import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  constructor (private user:Users, private router: ActivatedRoute){}

  id:any;
  usuario:any;

  nombre:any;
  img:any;
  cursos:any;
  info:any;
  imgcursosRealizados:any;

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    this.usuario = this.user.listaUsers[this.id]

    this.nombre = this.usuario["usuario"];
    this.img = this.usuario["img"]
    this.info = this.usuario["info"]
    this.imgcursosRealizados = this.usuario["certificados"]
  }
}
