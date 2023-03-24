import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/pais';

@Injectable({ providedIn: 'root' })
export class PaisesService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = 'https://restcountries.com/v3.1/all';

  getPaises() {
    return this.httpClient.get(this.apiUrl);
  }

  getOnePais(name: Pais) {
    const apiOnePais = `https://restcountries.com/v3.1/name/${name}`;
    return this.httpClient.get(apiOnePais);
  }
}
