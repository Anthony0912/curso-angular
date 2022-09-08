import { FormControl } from "@angular/forms";
import CannotBeStrider from "src/app/auth/interfaces/cannot-be-strider.interface";

export const _patterNameComplete: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const _patterEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const cannotBeStrider = (control:FormControl): CannotBeStrider | null  => {
    const value:string = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true
      }
    }
    return null
  }