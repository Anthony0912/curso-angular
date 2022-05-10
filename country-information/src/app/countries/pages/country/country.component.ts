import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `ul {cursor:pointer;}
    `
  ]
})
export class CountryComponent implements OnInit {
  public termino: string = ""
  public isError: boolean = false
  public showSuggestion: boolean = false
  public countries: Country[] = []
  public countriesSuggestions: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void { }

  public search(termino: string) {
    this.showSuggestion = false
    this.isError = false
    this.termino = termino;
    if (this.termino.length > 0) {
      this.countryService.searchCountry(termino).subscribe((countries: Country[]) => {
        this.countries = countries

      }, (err) => {
        this.isError = true
        this.countries = []
      })
    }
  }

  public suggestions(termino: string): void {
    this.isError = false;
    this.termino = termino;
    this.showSuggestion = true;
    this.countryService.searchCountry(termino).subscribe(countries =>
      this.countriesSuggestions = countries.splice(0, 5),
      (err) => this.countriesSuggestions = []
    )
  }

  public searchSuggestion(termino: string): void {
    this.search(termino)
  }
}
