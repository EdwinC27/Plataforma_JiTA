import { Curso } from "../cursos-Services/curso.model"

export interface Usuarios {
  usuario: string
  contraseña: string
  img: string
  id: string
  curso: Curso[]
  info: string
  certificados: any[]
}
