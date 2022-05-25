import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomDirective,
        multi: true
    }]
})

export class CustomDirective implements Validator {

    @Input() minimo!: number

    constructor() { }


    public validate(control: FormControl): any | null {
        const inputValue = control.value
        return inputValue < this.minimo ? { 'customMin' : true} : null
    }

}