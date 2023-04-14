import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorito, Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  
  @ViewChild("formulario") formulario!: NgForm;

  nuevo_favorito: string = "";

  persona: Persona = {
    nombre: "Camilo",
    favoritos: [
      { id: 1, nombre: "Metal Gear" },
      { id: 2, nombre: "Death Stranding" }
    ]
  }

  nombreValido(): boolean {
    return this.formulario?.controls['nombre']?.invalid && this.formulario?.controls['nombre']?.touched;
  }

  guardar(): void {
    console.log("formulario posteado");
  }

  agregar(): void {
    const favorito_obj: Favorito = {
      id: (this.persona.favoritos.length + 1),
      nombre: this.nuevo_favorito
    }
    this.persona.favoritos.push( {...favorito_obj} );
    this.nuevo_favorito = "";
  }

  eliminar( index: number ): void {
    this.persona.favoritos.splice( index, 1 );
  }


}
