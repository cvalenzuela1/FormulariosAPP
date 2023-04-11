import { CurrencyPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  initForm = {
    producto: "",
    precio: 0,
    existencias: 0
  };

  @ViewChild("formulario") formulario!: NgForm;

  constructor() { }

  nombreValido(): boolean {
    return this.formulario?.controls['producto']?.invalid && this.formulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.formulario?.controls['precio']?.invalid && this.formulario?.controls['precio']?.touched;
  }

  guardar(): void {
    // console.log( this.formulario );
    console.log("Posteo de información exitoso!");
    this.formulario.resetForm({
      producto: "",
      precio: 0,
      existencias: 0
    });
  }
}
