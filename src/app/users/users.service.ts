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
      curso: [],
      info: "Hola mí nombre es Edwin Alejandro Castillo Arroyo y tengo 18 años y actualmente trabajo como becario para AstraZeneca de la mano con Michael Page. Estudié en la preparatoria CECyTEJ plantel 23 de santa fe y me gradué con una carrera técnica en programación.",
      certificados: [
        "assets/imgCertificados/1/21.5 horas CSS.jpg",
        "assets/imgCertificados/1/56 horas java.jpeg",
        "assets/imgCertificados/1/70.5 horas javascript, html, css.jpg"
      ]
    },
    {
      usuario: "luis",
      contraseña: "luis123",
      img: "https://appsdejoseluis.com/wp-content/uploads/2020/04/face_co.png",
      id: "1",
      curso: [],
      info: "Hola mi nombre es Luis Eduardo Ocampo de la Torre y tengo 19 años y actualmente trabajo como becario para AstraZeneca de la mano con Michael Page. Estudié en la preparatoria CECyTEJ plantel 17 de Tesistán y me gradué con una carrera técnica en programación.",
      certificados: [
        "assets/imgCertificados/1/goITSs.png",
        "assets/imgCertificados/1/JavaSs.png",
        "assets/imgCertificados/1/LANIASs.png"
      ]
    }
  ]
}
