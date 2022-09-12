import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';
import { CountryByCode } from '../../interfaces/country-by-code.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public regiones: string[] = [];
  public paises: Country[] = [];
  public fronteras: CountryByCode[] = [];
  public loading: boolean = false;

  constructor(private fb: FormBuilder, private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.regiones = this.countriesService.regiones;
    this.myForm.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          this.myForm.get('pais')?.reset('');
          this.loading = true;
        }),
        switchMap(region => this.countriesService.getCountriesForRegion(region))
      ).subscribe(paises => {
        this.paises = paises;
        this.loading = false;
      });

    this.myForm.get('pais')?.valueChanges
      .pipe(
        tap((_) => {
          this.myForm.get('frontera')?.reset('');
          this.loading = true;
        }),
        switchMap(code => this.countriesService.getCountriesForCode(code)),
        switchMap(pais => this.countriesService.getCountriesByBorders(pais ? pais![0].borders : [])))
      .subscribe(paises => {
       for (let i = 0; i < paises.length; i++) {
        const element: any = paises[i];
        this.fronteras.push(element[0]);
       }
        this.loading = false;
      });
  }

  myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  })

  public save(): void { }
}
