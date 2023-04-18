import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Favorito, Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  public nuevo_favorito: FormControl = new FormControl('', Validators.required );

  public myForm: FormGroup = this._fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGames: this._fb.array([
      ['Metal Gear', Validators.required ],
      ['Death Stranding', Validators.required ]
    ])
  })

  constructor( private _fb: FormBuilder ) { }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  // nombreValido(): boolean {
  //   return this.formulario?.controls['nombre']?.invalid && this.formulario?.controls['nombre']?.touched;
  // }

  onSubmit(): void {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log( this.myForm.value );
    this.myForm.reset();
  }

  onAddToFavorites():void {

    if ( this.nuevo_favorito.invalid ) return;
    const newGame = this.nuevo_favorito.value;

    // this.favoriteGames.push(  new FormControl( newGame, Validators.required ) );
    this.favoriteGames.push(
      this._fb.control( newGame, Validators.required )
    );

    this.nuevo_favorito.reset();

  }

  onDeleteFavorite( index:number ):void {
    this.favoriteGames.removeAt(index);
  }


}
