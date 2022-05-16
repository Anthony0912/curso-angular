import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent implements OnInit {
  //i18nSelect
  public name: string = 'Anthony';
  public genero: string = 'masculino';
  public invitMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  };

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Hazel', 'Gabriel', 'Marco', 'Joselyn']
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  };

  //keyvalue pipe
  public person = {
    nombre: 'Anthony',
    edad: 25,
    direccion: 'Alajuela, Costa Rica'
  }

  // json pipe

  public heroes = [{
    nombre: 'Superman',
    vuela: true,
  },
  {
    nombre: 'Robin',
    vuela: false,
  }, {
    nombre: 'Aquaman',
    vuela: false,
  }]

  public myObservable = interval(1000)
  public valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa')
    }, 3500)
  })

  constructor() { }

  ngOnInit(): void { }

  public handleOnChangePerson(): void {
    if (this.name === 'Anthony') {
      this.name = 'Maria';
      this.genero = 'femenino'
    } else {
      this.name = 'Anthony'
      this.genero = 'masculino'
    }
  }


  public handleOnDeletePerson(): void {
    if (this.clients.length > 0) {
      this.clients.shift()
    }
  }

  public handleOnResetClient(): void {
    this.clients = ['Maria', 'Pedro', 'Juan', 'Hazel', 'Gabriel', 'Marco', 'Joselyn']
  }

}
