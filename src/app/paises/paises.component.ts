import { Component } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent {
  paises = [];
  constructor(private paisesService: PaisesService) {
    this.paisesService
      .getPaises()
      .subscribe((data: any) => (this.paises = data));
  }
}
