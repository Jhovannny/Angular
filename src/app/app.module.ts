import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { Routes, RouterModule } from '@angular/router';
import { MateriasComponent } from './materias/materias.component';
import { MateriaComponent } from './materia/materia.component';
import { MateriasService } from './services/materias.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisesComponent } from './paises/paises.component';
import { PaisTarjetaComponent } from './pais-tarjeta/pais-tarjeta.component';
import { PaisDetalleComponent } from './pais-detalle/pais-detalle.component';
import { PaisesService } from './services/paises.service';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: BodyComponent,
  },
  {
    path: 'directivas',
    component: DirectivasComponent,
  },
  {
    path: 'materias',
    component: MateriasComponent,
  },
  {
    path: 'paises',
    component: PaisesComponent,
  },
  {
    path: 'pais/:id',
    component: PaisDetalleComponent,
  },
  {
    path: 'nuevoUsuario',
    component: NuevoUsuarioComponent,
  },
  {
    ///redirecciona a home si se accede a una ruta que no existe o a la raiz
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent,
    HeaderComponent,
    PaisesComponent,
    PaisTarjetaComponent,
    PaisDetalleComponent,
    NuevoUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [MateriasService, PaisesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
