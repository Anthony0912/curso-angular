import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  public initForm = {
    producto: 'RTX3090',
    precio: 3000,
    existencias: 3
  }

  constructor() { }

  ngOnInit(): void { }

  public nameValid(): boolean {
    return this.myForm?.controls.producto?.invalid && this.myForm?.controls.producto?.touched;
  }

  public priceValid(): boolean {
    return this.myForm?.controls.precio?.touched && this.myForm?.controls.precio?.value < 0;
  }

  public save(): void {
    this.myForm.resetForm({
      producto:'Algo',
      precio: 0,
      existencias: 0,
    })
  }

}
