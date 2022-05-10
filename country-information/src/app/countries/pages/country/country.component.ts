import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {
  public termino: string = ""
  public isError: boolean = false
  public countries: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void { }

  public search(termino: string) {
    this.isError = false
    if (termino.length > 0) {
      this.termino = termino;
      this.countryService.searchCountry(this.termino).subscribe((country: Country[]) => {
        this.countries = country

      }, (err) => {
        this.isError = true
        this.countries = []
      })
    }
  }

  public suggestions(termino: string): void {
    this.isError = false
  }
}
