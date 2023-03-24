import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  // export class BodyComponent {
  // mostrarValor = true;
  ngOnInit(): void {}
  // materias: string[] = [
  //   'Matemáticas para Ingeniería',
  //   'Administracuión  de Base de Datos',
  //   'Desarrollo Web Profesional',
  //   'Inglés VII',
  //   'Planificación y Organización del Trabajo',
  //   'Seguridad en el Desarrollo de Aplicaciones',
  // ];
  // contador = 0;
  mensaje: string = 'Luis Jhovanny ';

  constructor() {}
}
