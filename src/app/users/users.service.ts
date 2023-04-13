import { Injectable } from '@angular/core';
import { Usuarios } from './users.module';

@Injectable({
  providedIn: 'root'
})
export class Users {
  listaUsers:Usuarios[] = [
    {
      usuario: "edwin",
      contraseña: "edwin123"
    },
    {
      usuario: "luis",
      contraseña: "luis123"
    }
  ]
}
