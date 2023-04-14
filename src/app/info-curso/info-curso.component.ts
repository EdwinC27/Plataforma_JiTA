import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CursosService } from '../cursos-Services/service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Users } from '../users/users.service';
@Component({
  selector: 'app-info-curso',
  templateUrl: './info-curso.component.html',
  styleUrls: ['./info-curso.component.css']

})
export class InfoCursoComponent implements OnInit{

  url:number|any
  curso: any;
  constructor (private service:CursosService, private router1: ActivatedRoute,private sanitizer: DomSanitizer, private user:Users, private router: ActivatedRoute){}
  id:number | any
  safeSrc: SafeResourceUrl | undefined;
  usuario:any;
  nombre:any;
  img:any;
  cursos:any;
  idUsuario:any;

  ngOnInit(): void {
    this.id = this.router1.snapshot.paramMap.get("id");
    this.url = this.router1.snapshot.paramMap.get("index");
    this.curso =this.service.listaCursos[this.id]
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.curso.urlsVideos[this.url]);
    this.idUsuario= this.router.snapshot.paramMap.get("idUsuario");
    this.usuario = this.user.listaUsers[this.idUsuario]
    this.nombre = this.usuario["usuario"];
    this.img = this.usuario["img"]
  }
}
