import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css'],
})
export class PaisDetalleComponent {
  pais: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.paisService.getOnePais(id).subscribe((pais) => {
        console.log(pais);
        this.pais = pais;
      });
    });
  }
}
