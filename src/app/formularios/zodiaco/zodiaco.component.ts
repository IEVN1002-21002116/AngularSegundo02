import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { zodiacochino } from './zodiaco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  saludoFinal!: string;
  edadCalcu!: string;
  signozodiaco!: string;
  imgsigno!: string;
  proceso = new zodiacochino();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombreCtrl: new FormControl(''),
      paternoCtrl: new FormControl(''),
      maternoCtrl: new FormControl(''),
      diaCtrl: new FormControl(''),
      mesCtrl: new FormControl(''),
      anioCtrl: new FormControl(''),
      generoCtrl: new FormControl('')
    });
  }

  procesarDatos(): void {
    this.proceso.nombreUsuario = this.formulario.value.nombreCtrl;
    this.proceso.apellidoPUsuario = this.formulario.value.paternoCtrl;
    this.proceso.apellidoMUsuario = this.formulario.value.maternoCtrl;
    this.proceso.diaNacimiento = this.formulario.value.diaCtrl;
    this.proceso.mesNacimiento = this.formulario.value.mesCtrl;
    this.proceso.anioNacimiento = this.formulario.value.anioCtrl;
    this.proceso.sexoUsuario = this.formulario.value.generoCtrl;

    this.proceso.ejecutarCalculos();

    this.saludoFinal = this.proceso.textoSaludo;
    this.edadCalcu = this.proceso.textoEdadFinal;
    this.signozodiaco = this.proceso.textoSignoFinal;
    this.imgsigno = this.proceso.imagenURL;
  }
}
