import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from 'src/app/sales/interfaces/heroe.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  public isUppercase: boolean = true;
  public sortFor:string = ''
  public heroes: Heroe[] =  [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Literna verde',
      vuela: true,
      color: Color.verde
    },

  ];

  constructor() { }

  ngOnInit(): void { }

  public handleOnChangeText(): void {
    this.isUppercase = !this.isUppercase;
  }

  public handleOnChangeSortFor(sortFor:string): void {
    this.sortFor = sortFor;
  }

}
