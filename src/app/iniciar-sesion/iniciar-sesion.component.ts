import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users/users.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  inputCorreo:string = "";
  inputContrasena:string = "";
  entro: boolean = false;

  constructor(private user:Users, private router: Router) {}

  verificarUsuario() {

    for(let indice=0; indice<this.user.listaUsers.length; indice++) {
      let valores = this.user.listaUsers[indice]

      if(valores.contraseña == this.inputContrasena && valores.usuario == this.inputCorreo) {
        this.entro = true;
      }
    }

    if(this.entro) {
      this.router.navigate(["tablero"]);
    } else {
      alert("Error contraseña o usuario incorrecto");
    }
  }
}
