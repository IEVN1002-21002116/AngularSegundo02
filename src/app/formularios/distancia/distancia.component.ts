import { Component } from '@angular/core';
import {Form, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Multiplicar } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  objdistancia = new Multiplicar();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl(''),
      numero3: new FormControl(''),
      numero4: new FormControl('')
    });
  }

  multiplicacion(): void {
    let x1= Number(this.formulario.value.numero1);
    let y1= Number(this.formulario.value.numero2);
    let x2= Number(this.formulario.value.numero3);
    let y2= Number(this.formulario.value.numero4);
    this.objdistancia.x1=x1,
    this.objdistancia.y1=y1,
    this.objdistancia.x2=x2,
    this.objdistancia.y2=y2,
    this.objdistancia.calcularDistancia(),
    this.resultado=this.objdistancia.resultado;
  }
}
