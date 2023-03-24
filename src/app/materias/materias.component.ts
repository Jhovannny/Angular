import { Component, Input, OnInit } from '@angular/core';
import { Materias } from '../interfaces/materias';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css'],
})
export class MateriasComponent implements OnInit {
  materias: Materias[] = [];
  semestreSeleccionado: number = 2;
  semestre: number = 0;

  constructor(private __materias: MateriasService) {
    this.materias = this.__materias.getMaterias();
  }

  ngOnInit(): void {}

  getSemestre(semestre: number) {
    this.semestreSeleccionado = semestre;
    console.log(this.semestre);
  }
}
