import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  generos: String[] = ['Masculino', 'Femenino'];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      genero: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log('submit');
    console.log(this.form.value);
    //evita que se envie el formulario
    event?.preventDefault();
  }

  getFormato(component: string) {
    let formato: string = 'form-control';

    if (
      this.form.get(component)?.invalid &&
      this.form.get(component)?.touched
    ) {
      formato = 'form control is-invalid';
    } else if (
      this.form.get(component)?.valid &&
      this.form.get(component)?.touched
    ) {
      formato = 'form control is-invalid';
    }

    return formato;
  }

  getError(component: string) {
    let message: string = '';
    let length: string = '';

    if (this.form.get(component)?.hasError('required')) {
      message = 'Este campo es requerido';
    } else if (this.form.get(component)?.hasError('minlength')) {
      length =
        this.form.get(component)?.errors?.['minlength']?.['requiredLength'];
      message = `El campo debe tener al menos ${length} caracteres`;
    } else if (this.form.get(component)?.hasError('email')) {
      message = 'Correo invalido, verifique si esta bien escrito';
    }

    console.log(message);
    return message;
  }
}
