import { Injectable } from '@angular/core';
import { Usuarios } from './users.module';

@Injectable({
  providedIn: 'root'
})
export class Users {
  listaUsers:Usuarios[] = [
    {
      usuario: "edwin",
      contraseña: "edwin123",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrw6TFJfxQTpixJo4fe2VDEBKrNfyPUhkTdw&usqp=CAU",
      id: "0",
      curso: []
    },
    {
      usuario: "luis",
      contraseña: "luis123",
      img: "https://appsdejoseluis.com/wp-content/uploads/2020/04/face_co.png",
      id: "1",
      curso: []
    }
  ]
}
