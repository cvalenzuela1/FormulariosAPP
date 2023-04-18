import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  public myForm: FormGroup = this._fb.group({
    gender: ['M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  constructor( private _fb: FormBuilder ) { }

  get myFormGender() {
    return this.myForm.get('gender') as FormControl;
  }

  get myFormNotifications() {
    return this.myForm.get('wantNotifications') as FormControl;
  }

  get myFormTermsAndConditions() {
    return this.myForm.get('termsAndConditions') as FormControl;
  }

  onSave(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    
    const { termsAndConditions, ...newPerson } = this.myForm.value;
    console.log( newPerson );
  }
}
