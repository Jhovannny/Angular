import { Injectable } from '@angular/core';
import { Materias } from '../interfaces/materias';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  constructor() {}

  private materias: Materias[] = [
    {
      cuatrimestre: 1,
      materias:
        'Fundamentos de TI, Fundamentos de Redes, Metodología de la Programación, Expresión Oral y Escrita I, Formación Sociocultural I, Inglés I',
      fecha: '2021-01-01',
      imagen: 'assets/cuervo.jpeg',
    },
    {
      cuatrimestre: 2,
      materias:
        'Funciones Matemáticas, Metodologías y Modelado de   Desarrollode Software, Interconexión de Redes, Introducción al Diseño Digital, Programación Orientada a Objetos, Base de Datos, Formación Sociocultural II, Inglés II',
      fecha: '2021-09-01',
      imagen: 'assets/cuervo.jpeg',
    },
    {
      cuatrimestre: 3,
      materias:
        ' Cálculo Diferencial, Probabilidad y Estadística, Sistemas Operativos, Integradora I, Aplicaciones Web, Base de Datos para Aplicaciones, Formación Sociocultural III, Inglés III',
      fecha: '2021-09-01',
      imagen: 'assets/cuervo.jpeg',
    },
    {
      cuatrimestre: 4,
      materias:
        'Estructura de Datos Aplicadas, Aplicaciones Web Orientada a Servicios, Evaluación y Mejora para el Desarrollo   de Software, Formación Sociocultural IV, Inglés IV',
      fecha: '2021-09-01',
      imagen: 'assets/cuervo.jpeg',
    },
  ];

  getMaterias(): Materias[] {
    return this.materias;
  }
}
