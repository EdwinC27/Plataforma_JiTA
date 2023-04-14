import { Injectable } from "@angular/core";
import { Curso } from "./curso.model";

@Injectable({
  providedIn: 'root'
})
export class CursosService{

  listaCursos:Curso[]=[
    {
      image:"springcourse.png",
      name:"Spring Boot",
      imageUrl:["https://i.ytimg.com/vi/ltA-mIYyxhY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7srqYaLSCkv3EAS33KetWEicVZQ","https://i.ytimg.com/vi/RyvP-GYe19s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6RjdCOHbucvC3nWnaz-Nx_8dkhQ","https://i.ytimg.com/vi/mCogBfNIFvg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_wKOODKmywwVTWd5umkPk6H5wkw","https://i.ytimg.com/vi/sLY9umEahso/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtkGgmUkf26UpsBgbLg_sDOWMZlw","https://i.ytimg.com/vi/MC9BwnURnfg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5mxvRaUxyz_dCVy5kEtPysmp7aQ","https://i.ytimg.com/vi/elz3vXttR-Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUWSi0aSI3KpsCnDWg8gmSM6y6eg","https://i.ytimg.com/vi/C3Xwu7wuYAo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXZ4PeehyUg-t7uJPbiU9dBC1iOg","https://i.ytimg.com/vi/RABN1tDBN4Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH3xJjhgryXDRLx6ucek3jfeqwbw"],
      progreso:70,
      tipos:["Español","Hard"],
      info:"Curso basico de springBoot",
      urlsVideos:["ltA-mIYyxhY?rel=0","RyvP-GYe19s?rel","mCogBfNIFvg?rel","sLY9umEahso?rel","MC9BwnURnfg","elz3vXttR-Q","C3Xwu7wuYAo","RABN1tDBN4Q"],
      estado:"progreso",
      id:0
    },
    {
      image:"angularcourse.jpeg",
      name:"Angular",
      imageUrl:["https://i.ytimg.com/vi/fXpMiweCC_o/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBVBR656HNMMPiohwuIxTfL0j6TA" , "https://i.ytimg.com/vi/nTaC_0FgqSU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnTaxzsvq6UnXHM476gFVsHg7lIA" , "https://i.ytimg.com/vi/FfqLD0Yoxu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOOjNNn_3PBRPHuXsihoeSx6vlOg" , "https://i.ytimg.com/vi/uFA09pl_f4s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyLQ3KUfxpAuxR-cuqk9yvKckonA" , "https://i.ytimg.com/vi/CitMo3hip6Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGP9K_V1a7m7ipbYZvpcZ4GpO9XQ" , "https://i.ytimg.com/vi/DfSuph1OyZ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9Tk345HkLAmWOY8MZFJJ2dTQNKQ" , "https://i.ytimg.com/vi/KfYyWNqJaVc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfT4YqhNkFZdhhnlXOMng017Vq5Q" , "https://i.ytimg.com/vi/-yXkW7JTwN8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnNwLgy_lcSGyl03HJAwPfHQyTNg" , "https://i.ytimg.com/vi/ILO7-5Hnxt8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg0FtMze0tSZ25BzkxwVm8BMkQvQ" , "https://i.ytimg.com/vi/FPjFXQf1pqM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp6xFsAaXgIV3lHaKTXiUwNpSAYw"],
      progreso:60,
      tipos:["Español","Hard"],
      info:"Curso basico de el framework Angular",
      urlsVideos:["fXpMiweCC_o","nTaC_0FgqSU","FfqLD0Yoxu0","uFA09pl_f4s","CitMo3hip6Y","DfSuph1OyZ0","KfYyWNqJaVc","-yXkW7JTwN8","ILO7-5Hnxt8","FPjFXQf1pqM"],
      estado:"progreso",
      id:1
    },
    {
      image:"sqlCourse.jpeg",
      name:"SQL BASICO",
      imageUrl:["https://i.ytimg.com/vi/iOiyJgnN71c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAE3cw1KKR_05TUpGaVENJiNT3awQ", "https://i.ytimg.com/vi/Bk3rY_ICgPo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkoL_13U2XtBPGXPFJbh-JSSiyNA" ,  "https://i.ytimg.com/vi/np6PH_vs-GI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvwS2n9FWZWSsbN3qmnGmL-_bGtQ" , "https://i.ytimg.com/vi/yZk9NdxFUrk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEtAccRVEUEl64JRRO-sEn8GPN4g" , "https://i.ytimg.com/vi/TPn1200-fbc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw0aS9792GvsEIL8RCjrSa0L8ymA" , "https://i.ytimg.com/vi/qwfzpXI_Qyw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKMwNJvtnY3NuyLpyNa2n9BXPi9w" , "https://i.ytimg.com/vi/M2Ee0HnSPOU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADjjl3DrlOBffJUtdVOH5J_aFJEQ" , "https://i.ytimg.com/vi/2LtcWYdVx_I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6tmKRJ6pzzsh8tB3jiiAuegVOcA" , "https://i.ytimg.com/vi/N99-7gvjy6o/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBshRMlLwSPPRkJOBZGYVXotOgIg" , "https://i.ytimg.com/vi/rGPb5E1UAJA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZfIbvnxlTuDmzfSSSquy6e2FYcQ"],
      progreso:0,
      tipos:["Español","Hard"],
      info:"Curso basico para iniciar en el mundo de las bases de datos con SQL",
      urlsVideos:["iOiyJgnN71c","Bk3rY_ICgPo","np6PH_vs-GI","yZk9NdxFUrk","TPn1200-fbc","qwfzpXI_Qyw","M2Ee0HnSPOU","2LtcWYdVx_I","N99-7gvjy6o","rGPb5E1UAJA"],
      estado:"",
      id:2
    },
    {
      image:"java.png",
      name:"Curso basico de JAVA",
      imageUrl:["https://i.ytimg.com/vi/L1oMLsiMusQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpjFYgG7m7t8Bs6bKHcb1SxxgGjQ" , "https://i.ytimg.com/vi/Cs5ymoNkrX8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2jEFke-ZNc7AtFZ8OLMT6JdsnCQ" , "https://i.ytimg.com/vi/Cdr4wTz0Wro/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQApNAYnQTFIK6E-bvd56YJzldKQ" , "https://i.ytimg.com/vi/vJTeIJx_Kn0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAml0G03WmLT5u8FHTyMN7pyvzFeA" , "https://i.ytimg.com/vi/Ifg_JzetpU4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRP1gM-LWxJ6yR5uhETdVAoLYViA" , "https://i.ytimg.com/vi/pwVppK3RgyI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYxA6YGOYFqBfbJBUpZr--0euj6Q" , "https://i.ytimg.com/vi/pPG66_BZ8-c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVqIEJRrQ_ngou9aIJvOExeOdpKw" , "https://i.ytimg.com/vi/WTgFsYc-RaA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdlKp6swort-igm-qVY8w-KIqTEg" , "https://i.ytimg.com/vi/i5y1agE0nLs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDsPkEn3dABCAlyvWkD3BIhVIuTw" , "https://i.ytimg.com/vi/KjX5SX62e2Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxIJeIkmJn84p4345anXI_30R9kg"],
      progreso:40,
      tipos:["Español","Hard"],
      info:"En este curso aprenderas los conceptos basico para trabajar con el leguanje de programacion JAVA",
      urlsVideos:["L1oMLsiMusQ","Cs5ymoNkrX8","Cdr4wTz0Wro","vJTeIJx_Kn0","Ifg_JzetpU4","pwVppK3RgyI","pPG66_BZ8-c","WTgFsYc-RaA","i5y1agE0nLs","KjX5SX62e2Y"],
      estado:"progreso",
      id:3
    },
    {
      image:"agileCourse.jpeg",
      name:"Agile Scrum",
      imageUrl:["https://i.ytimg.com/vi/C1P-MU2s7ls/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIGIoHjAP&rs=AOn4CLD0sKhtXxJG5UCWnQdfHJkAbopFzg" , "https://i.ytimg.com/vi/9py_nUSe0yI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJv6hoQMyaILGhZO3S24-Ti5n1mw" , "https://i.ytimg.com/vi/lLGQNzW7k1s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD6w3lThV9-5RL9NzhA3jiKGQtCQ" , "https://i.ytimg.com/vi/ritZh_-Vgtk/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFsoWzAP&rs=AOn4CLBjdOEobj34CpH9Rguzy35OMqxAog" , "https://i.ytimg.com/vi/oEHizfcg2vM/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFooUDAP&rs=AOn4CLCpcfivgoxPaGeRuo8GYjfmnhAYpQ" , "https://i.ytimg.com/vi/NEK8dChRWTg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCB9u3mhGfrYmMwCjnZVlMLm1EXwg" , "https://i.ytimg.com/vi/PMnk8H8Oa38/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKkRG6jS-HReoqh0SKcE0lv9qJhQ" , "https://i.ytimg.com/vi/yVA1yI3orDA/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFAoQjAP&rs=AOn4CLDGai5ym2D-NJSmvnXdVG_jdGNssg" , "https://i.ytimg.com/vi/F2zNcTlHK8A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATi5ZoRRHnuwZTGixmjk2urRjFNQ" , "https://i.ytimg.com/vi/i6K1XeR3Tuk/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIDooOTAP&rs=AOn4CLAyevKV0kt6J6lgUoXi3zNGx8F-Vw"],
      progreso:90,
      tipos:["Español","Soft"],
      info:"En este curso aprendaras a trabajar con el framework de Agile con Scrum",
      urlsVideos:["C1P-MU2s7ls","9py_nUSe0yI","lLGQNzW7k1","ritZh_-Vgtk","oEHizfcg2vM","NEK8dChRWTg","PMnk8H8Oa38","yVA1yI3orDA","F2zNcTlHK8A","i6K1XeR3Tuk"],
      estado:"progreso",
      id:4
    },
    {
      image:"comuniCourse.jpeg",
      name:"Comunicacion Efectiva",
      imageUrl:["https://i.ytimg.com/vi/qUABNPm-Zoo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkGc-ffiqvTtjDifTSLIZLiQdzoA" , "https://i.ytimg.com/vi/9hChxz9O3ak/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQHvLUDk3SIpJ32-FV2tCC1po79w" ,  "https://i.ytimg.com/vi/mwkcqoaDxZM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9DdLcJEermX5EfG_LpmubIMRXfg" , "https://i.ytimg.com/vi/FkpF_wYRzPE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlbrgbBB85ZVY6nHEpTtzBjv6A4g" , "https://i.ytimg.com/vi/iPPHHDeGdQ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZ1_rzqmHNHrU83wGHjyFthDnN4A" , "https://i.ytimg.com/vi/TPeEOOv7q_I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzBjv2wRBMFqgJjrvsrvgXONjh9w" , "https://i.ytimg.com/vi/_Ib7LZpMU6w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFP2jfMxSSapqFfDrcMGzqprv6kw" , "https://i.ytimg.com/vi/_PASrtxqGeY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoMompdLx640o_gNNaUHyqL2iLJA" , "https://i.ytimg.com/vi/am2ywcge7_A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADy41LMBKbK2NFH9GVxHttMmsXNQ"],
      progreso:0,
      tipos:["Español","Soft"],
      info:"En este aprenderas sobre comunicacion efectiva, asertiva y no violenta",
      urlsVideos:["qUABNPm-Zoo","9hChxz9O3ak","_YqdxzqStyc","mwkcqoaDxZM","FkpF_wYRzPE","iPPHHDeGdQ0","TPeEOOv7q_I","_Ib7LZpMU6w","_PASrtxqGeY","am2ywcge7_A"],
      estado:"",
      id:5
    },
    {
      image:"designCourse.jpeg",
      name:"Design Thinking",
      imageUrl:["https://i.ytimg.com/vi/AHrDsT5mIEY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRh4Sf71e3rLh1HPnWZBUkmVjT0A" , "https://i.ytimg.com/vi/N5H4GJTZbyc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Asmx4qBIUlEh0U9rFP_WC1K6cA" , "https://i.ytimg.com/vi/ul6gxs1wQEw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBi1CM8uaL7_ahXi9pjj1CdPN-tWw" , "https://i.ytimg.com/vi/UlYIjjyq1nI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDK7lrZGmGOvJDVDBk67pyt-jGfg" , "https://i.ytimg.com/vi/a3rMAjCFDm0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsYpbhEhcoItASqESjSHiPQ4Wklg" , "https://i.ytimg.com/vi/9EupFQ79JCg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAJo1kFWHnPLC3xz_aseItAM6XMQ"],
      progreso:40,
      tipos:["Español","Soft"],
      info:"En este curso aprenderas a trabajar como con la metodologia de gestion de proyecto Design Thinking, un punto importante de este modelo es que esta 100% enfocado en el cliente final",
      urlsVideos:["AHrDsT5mIEY","N5H4GJTZbyc","ul6gxs1wQEw","UlYIjjyq1nI","a3rMAjCFDm0","9EupFQ79JCg"],
      estado:"progreso",
      id:6
    },
    {
      image:"negociCourse.jpeg",
      name:"Curso de Negociacion",
      imageUrl:["https://i.ytimg.com/vi/SyvaQpVE97U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtN9cF_d-U3RSZEV_lyQhV8TLP6w" , "https://i.ytimg.com/vi/UppwAUB8euo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDB_e42jMzXlRRnfcFtM03UMltc1Q" , "https://i.ytimg.com/vi/Kx-7n2gPk4I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4cNeDxZi42MfLBHcn_wCL__A10w" , "https://i.ytimg.com/vi/-6HO0yfQNLc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBHKX-v-Ci8vCa7uvsiJJZTzRkTA" , "https://i.ytimg.com/vi/euvzG3chDsc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu_fCOck6WB-p8Lbq5q7Yn4hrVdw" , "https://i.ytimg.com/vi/4CmNtJtLcNA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW57Sg4p3zFEXg8ioMxR1neycSZA"],
      progreso:0,
      tipos:["Español","Soft"],
      info:"En este curso aprenderas sobre Negociacion",
      urlsVideos:["SyvaQpVE97U","UppwAUB8euo","Kx-7n2gPk4I","-6HO0yfQNLc","euvzG3chDsc","4CmNtJtLcNA"],
      estado:"",
      id:7
    },
    {
      image:"emotionalintelCourse.jpeg",
      name:"Inteligencia Emocional",
      imageUrl:["https://i.ytimg.com/vi/FBhKyGVKuHI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7r2G-vDNf2GvmYhGv6WZTekGiSw" , "https://i.ytimg.com/vi/A6ibIbuUyEY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG7jKWpt9hEPtSU4qIFfeEnY570A" , "https://i.ytimg.com/vi/V7wTOYfyuk8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHhpEk7L9cdH_rF01An4__Hwcp0g" , "https://i.ytimg.com/vi/nk-YaTuPxP4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY8o34IiXa5d16gUmHFBfltRGWDA" ,"https://i.ytimg.com/vi/lBE4KxTjqXc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUrUNWjZYFyyg1nQX6Ejlza77Rzw" , "https://i.ytimg.com/vi/saZ16SitSJc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqqUiHC0grmAIgwA1p7d0-MtNH8A" , "https://i.ytimg.com/vi/V75QkyBSFyo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsTpiik2hcs0Ppe21f3fqP3agNaQ" , "https://i.ytimg.com/vi/fosSV9HtYlQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARqMViPpaa84xSM5AofMs-LjrttA" , "https://i.ytimg.com/vi/aDoze9qOkK8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmvCtrRKI7gljc0aK-gHOp_tqN-A" , "https://i.ytimg.com/vi/S1RxKNuCsaw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2pApar30h1-ztXwRJ0xMrC2PJcg"],
      progreso:0,
      tipos:["Español","Soft"],
      info:"En este curso aprenderas sobre inteligencia emocional",
      urlsVideos:[ "FBhKyGVKuHI", "A6ibIbuUyEY","A6ibIbuUyEY","nk-YaTuPxP4","lBE4KxTjqXc","saZ16SitSJc","V75QkyBSFyo","fosSV9HtYlQ","aDoze9qOkK8","S1RxKNuCsaw"],
      estado:"",
      id:8
    }
  ]

}

