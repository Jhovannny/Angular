import { Component, Input, OnInit } from '@angular/core';
import { Materias } from '../interfaces/materias';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css'],
})
export class MateriaComponent implements OnInit {
  @Input() materia = {} as Materias;

  ngOnInit(): void {}

  constructor() {}
}
