import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  public nameLower:string = 'anthony'
  public nameUpper:string = 'ANTHONY'
  public nameComplete:string = 'aNThONy kEyLor CaRDoNa MaIreNA'
  public date:Date = new Date();
  
  constructor() { }

  ngOnInit(): void { }

}
