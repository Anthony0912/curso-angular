import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.myForm.reset({
      name: "RTX 4080 ti",
      price: 10,
    })
  }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.minLength(0)]],
    stock: [0, [Validators.required, Validators.minLength(0)]],
  });

  public inputIsValid(input: string): boolean | null { 
    return this.myForm.controls[input].errors && this.myForm.controls[input].touched;
  }

  public save():void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
  }

}
