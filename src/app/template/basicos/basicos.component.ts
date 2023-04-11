import { CurrencyPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  @ViewChild("formulario") formulario!: NgForm;

  constructor() { }

  nombreValido(): boolean {
    return this.formulario?.controls['producto']?.invalid && this.formulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.formulario?.controls['precio']?.invalid && this.formulario?.controls['precio']?.touched;
  }

  guardar(): void {
    console.log( this.formulario.value );
  }
}
