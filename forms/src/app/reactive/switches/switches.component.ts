import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  public person = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, terminos: false });

    //suscribir a un campo especifico
    //this.myForm.get('terminos')?.valueChanges.subscribe(value => console.log(value));

    this.myForm.valueChanges.subscribe( ({termino, ...restoArgumentos}) => {
      this.person = restoArgumentos
    });
  }

  myForm: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  public save(): void {
    const formValue = { ...this.myForm.value };
    delete formValue.terminos
    this.person = formValue
  }


}
