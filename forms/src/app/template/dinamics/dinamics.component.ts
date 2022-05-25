import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  public persona: Persona = {
    nombre: 'Anthony',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'DeathStranding' }
    ]
  }

  public newGame: string = ''

  constructor() { }

  ngOnInit(): void { }

  public save(): void {

  }

  public add(): void {
    const newFavorite: Favorito = { id: this.persona.favoritos.length + 1, nombre: this.newGame };
    this.persona.favoritos.push({ ...newFavorite })
    this.newGame = ''
  }

  public delete(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

}
