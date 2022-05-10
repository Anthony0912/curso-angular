import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {
  public termino: string = ""
  public isError: boolean = false
  public countries: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void { }

  public search(termino:string) {
    this.isError = false
    this.termino = termino;
    this.countryService.searchCapital(this.termino).subscribe((country: Country[]) => {
      this.countries = country
    }, (err) => {
      this.isError = true
      this.countries = []
    })
  }

}