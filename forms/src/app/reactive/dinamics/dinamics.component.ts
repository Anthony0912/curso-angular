import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Fortnite', Validators.required]
    ], Validators.required)
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  public deleteFavorite(i: number):void {
    this.favoritesArray.removeAt(i);
  }

  public  addFavorite(): void {
    if (this.newFavorite.invalid) {
      return;
    }

    //this.favoritesArray.push(new FormControl(this.newFavorite.value, Validators.required)); //opcional
    this.favoritesArray.push(this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  public inputIsValid(input: string): boolean | null {
    return this.myForm.controls[input].errors && this.myForm.controls[input].touched;
  }

  public save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
    console.log(this.myForm.value);
  }

  public get favoritesArray(): FormArray {
    return this.myForm.get('favorites') as FormArray;
  }
}
