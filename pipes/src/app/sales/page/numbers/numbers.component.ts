import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {

  public netSales:number = 2567789.5567
  public percentage:number = 0.6812

  constructor() { }

  ngOnInit(): void { }

}
