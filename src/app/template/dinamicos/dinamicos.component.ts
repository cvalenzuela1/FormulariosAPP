import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  
  @ViewChild("formulario") formulario!: NgForm;

  nombreValido(): boolean {
    return this.formulario?.controls['nombre']?.invalid && this.formulario?.controls['nombre']?.touched;
  }

  guardar(): void {
    console.log("formulario posteado");
  }
}
