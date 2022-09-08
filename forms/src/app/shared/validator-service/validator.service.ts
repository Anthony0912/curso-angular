import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  private _patterNameComplete: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  private _patterEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  public cannotBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true
      }
    }
    return null
  }

  public equalFields(firstInput: string, secondInput: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const password: string = formGroup.get(firstInput)?.value;
      const repeatPassword: string = formGroup.get(secondInput)?.value;

      if (password !== repeatPassword) {
        formGroup.get(secondInput)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(secondInput)?.setErrors(null);
      
      return null;
    }
  }

  public get patterNameComplete(): string {
    return this._patterNameComplete
  }

  public get patterEmail(): string {
    return this._patterEmail
  }
}
