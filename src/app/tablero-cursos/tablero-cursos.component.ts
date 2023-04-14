import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users/users.service';

@Component({
  selector: 'app-tablero-cursos',
  templateUrl: './tablero-cursos.component.html',
  styleUrls: ['./tablero-cursos.component.css']
})
export class TableroCursosComponent implements OnInit {
  constructor (private user:Users, private router: ActivatedRoute){}
  id:any;
  usuario:any;

  nombre:any;
  img:any;
  cursos:any;

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    this.usuario = this.user.listaUsers[this.id]

    for (const clave in this.usuario) {
      this.nombre = this.usuario["usuario"];
      this.img = this.usuario["img"]
      this.cursos = this.usuario["curso"]
    }
  }
}
