import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uppercaseCustom'
})

export class UppercasePipe implements PipeTransform {
    transform(value:string, isUppercase:boolean = true):string {
        return isUppercase ? value.toUpperCase() : value.toLowerCase();
    }

}