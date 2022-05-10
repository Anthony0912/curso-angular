import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  public country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({ id }) => this.countryService.searchCountryByCode(id))).subscribe(country => {
      this.country = country[0]
    })
  };

}

// Con tap en el pipe
// this.activatedRoute.params.pipe(switchMap(({ id }) => this.countryService.searchCountryByCode(id)), tap(console.log)).subscribe(country => {
//   this.country = country[0]
// })
// Opcional
// this.activatedRoute.params.subscribe(({ id }) => {
//   this.countryService.searchCountryByCode(id).subscribe(country => { })
//  })