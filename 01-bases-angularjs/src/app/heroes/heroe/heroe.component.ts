import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    public heroes:string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
    public edad:number = 45
    public heroeBorrado: boolean = false
    public heroeBorradoList:string = ''

    // public obtenerNomber():string {
    //     return `${this.nombres} - ${this.edad}`
    // }

    
    // public get nombreCapitalizado() : string {
    //     return this.nombre.toUpperCase()
    // }
    

    public cambiarNombre():void {
        this.heroeBorrado = true;
        //this.nombre = 'Spiderman';
    }

    public cambiarEdad():void {
        this.heroeBorrado = false
        //this.edad = 30
    }
    
    public borrarHeore():void {
        this.heroeBorradoList = this.heroes.shift() || '';
    }
    
}