import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'pipes';
  public name: string = 'Anthony Keylor Cardona Mairena';
  public value: number = 1000;
  public obj: Object = { name: 'Anthony' };
}
