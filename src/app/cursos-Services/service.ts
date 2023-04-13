import { Curso } from "./curso.model";

export class CursosService{

  listaCursos:Curso[]=[
    {
      image:"springcourse.png",
      name:"Spring Boot",
      imageUrl:[],
      progreso:70,
      tipos:["Español","Hard"],
      info:"Curso basico de springBoot",
      urlsVideos:["ltA-mIYyxhY","RyvP-GYe19s","mCogBfNIFvg","sLY9umEahso","MC9BwnURnfg","elz3vXttR-Q","C3Xwu7wuYAo","RABN1tDBN4Q"],
      estado:"progreso"
    },
    {
      image:"angularcourse.jpeg",
      name:"Angular",
      imageUrl:[],
      progreso:60,
      tipos:["Español","Hard"],
      info:"Curso basico de el framework Angular",
      urlsVideos:[],
      estado:"progreso"
    },
    {
      image:"sqlCourse.jpeg",
      name:"SQL BASICO",
      imageUrl:[],
      progreso:0,
      tipos:["Español","Hard"],
      info:"Curso basico para iniciar en el mundo de las bases de datos con SQL",
      urlsVideos:[],
      estado:""
    },
    {
      image:"agileCourse.jpeg",
      name:"Agile Scrum",
      imageUrl:[],
      progreso:90,
      tipos:["Español","Soft"],
      info:"En este curso aprendaras a trabajar con el framework de Agile con Scrum",
      urlsVideos:[],
      estado:"progreso"
    },
    {
      image:"comuniCourse.jpeg",
      name:"Comunicacion Efectiva",
      imageUrl:[],
      progreso:0,
      tipos:["Español","Soft"],
      info:"En este aprenderas sobre comunicacion efectiva, asertiva y no violenta",
      urlsVideos:[],
      estado:""
    },
    {
      image:"designCourse.jpeg",
      name:"Design Thinking",
      imageUrl:[],
      progreso:40,
      tipos:["Español","Soft"],
      info:"En este curso aprenderas a trabajar como con la metodologia de gestion de proyecto Design Thinking, un punto importante de este modelo es que esta 100% enfocado en el cliente final",
      urlsVideos:[],
      estado:"progreso"
    },
    {
      image:"negociCourse.jpeg",
      name:"Curso de Negociacion",
      imageUrl:[],
      progreso:0,
      tipos:["Español","Soft"],
      info:"En este curso aprenderas sobre Negociacion",
      urlsVideos:[],
      estado:""
    },
    {
      image:"emotionalintelCourse.jpeg",
      name:"Inteligencia Emocional",
      imageUrl:[],
      progreso:0,
      tipos:["Español","Soft"],
      info:"En este curso aprenderas",
      urlsVideos:[],
      estado:""
    },
    {
      image:"java.png",
      name:"Curso basico de JAVA",
      imageUrl:[],
      progreso:40,
      tipos:["Español","Hard"],
      info:"En este curso aprenderas los conceptos basico para trabajar con el leguanje de programacion JAVA",
      urlsVideos:[],
      estado:"progreso"
    },
  ]

}

