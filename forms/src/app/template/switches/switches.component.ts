import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
 
  public persona = {
    genero: 'F',
    notificationes: false
  }

  public terminos:boolean = false

  constructor() { }

  ngOnInit(): void { }


}
