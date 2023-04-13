import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[customTrim][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomTrimLengthDirective,
      multi: true
    } 
  ]
})
export class CustomTrimLengthDirective implements Validator {

  @Input() minLength!: number;

  validate(control: FormControl) {
    const inputValue = control.value;

    return ( inputValue?.trim().length < this.minLength )
            ? { 'customTrim': true }
            : null;
  }

}
