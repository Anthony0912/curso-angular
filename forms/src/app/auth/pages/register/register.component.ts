import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator-service/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator-service/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Anthony Cardona',
      email: 'test1@test.com',
      username: '@akcardpma',
      password: '123456',
      repeatPassword: '123456'
    })
  }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.patterNameComplete)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.patterEmail)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.cannotBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.equalFields('password', 'repeatPassword')]
  });

  public inputNotValid(input: string): boolean | undefined {
    return this.myForm.get(input)?.invalid && this.myForm.get(input)?.touched;
  }

  public handleOnSubmitMyForm(): void {
    this.myForm.markAllAsTouched();
  }

  public get emailError(): string {
    const errors: ValidationErrors | null | undefined = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'El correo electronico es obligatorio.';
    } else if (errors?.pattern) {
      return 'El correo electronico no tiene un formato valido.';
    } else if (errors?.existEmail) {
      return 'El correo electronico ya existe.';
    }
    return '';
  }
}
