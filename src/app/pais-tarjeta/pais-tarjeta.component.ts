import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-tarjeta',
  templateUrl: './pais-tarjeta.component.html',
  styleUrls: ['./pais-tarjeta.component.css'],
})
export class PaisTarjetaComponent implements OnInit {
  @Input() pais: any;

  ngOnInit(): void {}

  //muestra el lenguaje de todos los paises que se encuentran en el arreglo
  getLenguajes(): string {
    let lenguajes: string = '';
    for (const lenguaje of this.pais.languages) {
      //separa los lenguajes con coma y espacio ', ' pero los lenguajes no viene con el atributo 'name' por lo que se debe agregar en el arreglo de paises
      lenguajes += lenguaje.name + ', ';
    }
    return lenguajes.slice(0, -2);
  }
}
