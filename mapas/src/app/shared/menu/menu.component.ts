import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string
  nombre: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }`
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [
    {
      ruta: 'mapas/pantalla-completa',
      nombre: 'Pantalla Completa'
    },
    {
      ruta: 'mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: 'mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: 'mapas/propiedades',
      nombre: 'Propiedades'
    },
  ];

}
