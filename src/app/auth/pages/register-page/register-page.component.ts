import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailValidatorService } from 'src/app/shared/validators/services/email-validator.service';
import { ValidatorsService } from 'src/app/shared/validators/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public myForm: FormGroup = this._fb.group({
    name: ['', [ Validators.required, Validators.pattern( this._validatorsService.firstNameAndLastnamePattern )]],
    // email: ['', [ Validators.required, Validators.pattern(  this._validatorsService.emailPattern )], 
    // [ new EmailValidatorService() ]],
    email: ['', [ Validators.required, Validators.pattern( this._validatorsService.emailPattern )], 
    [ this._emailValidatorService ]],
    username: ['', [ Validators.required,  this._validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  },{
    validators: [
      this._validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
    ]
  });


  constructor
  ( 
    private _fb: FormBuilder ,
    private _validatorsService: ValidatorsService,
    private _emailValidatorService: EmailValidatorService
  ) { }

  isValidField( field: string ) {
    return this._validatorsService.isValidField( this.myForm, field );
  }

  onSubmit(): void {
    console.log("posteó");
  }
}
