import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class RegionComponent implements OnInit {

  public regions: string[] = ["EU", "EFTA", "CARICOM", "PA", "AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  public regionActive: string = ""
  public countries: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void { }

  public handleOnRegionActive(region: string): void {
    if (region === this.regionActive) return;
    this.regionActive = region;
    this.countries = []
    this.countryService.searchCountryByRegion(this.regionActive).subscribe(countries => {
      this.countries = countries;
    })
  }

  public getClassCSSRegionButton(region: string): string {
    return region === this.regionActive ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
