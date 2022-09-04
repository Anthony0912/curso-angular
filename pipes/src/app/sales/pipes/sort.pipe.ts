import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from 'src/app/sales/interfaces/heroe.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Heroe[], sortFor: string = 'Sin Valor'): Heroe[] {
    switch (sortFor) {
      case 'nombre':
        return heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
        return heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
      case 'color':
        return heroes = heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return heroes;
    }
  }

}
