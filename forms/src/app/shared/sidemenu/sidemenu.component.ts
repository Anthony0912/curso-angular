import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class SidemenuComponent implements OnInit {

  public templateMenu: MenuItem[] = [
    { text: 'Básicos', route: './template/basicos' },
    { text: 'Dinámicos', route: './template/dinamicos' },
    { text: 'switches', route: './template/switches' },
  ];
  
  public reactiveMenu: MenuItem[] = [
    { text: 'Básicos', route: './reactive/basicos' },
    { text: 'Dinámicos', route: './reactive/dinamicos' },
    { text: 'switches', route: './reactive/switches' },
  ];
 
  public validators: MenuItem[] = [
    { text: 'Registro', route: './autenticacion/registro' },
    { text: 'Inicio de sesion', route: './autenticacion/inicio-sesion' },
  ];

  constructor() { }

  ngOnInit(): void { }

}
