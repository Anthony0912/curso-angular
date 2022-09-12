import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { combineLatest, Observable, of } from 'rxjs';
import { CountryByCode } from '../interfaces/country-by-code.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _baseUrl: string = 'https://restcountries.com/v3.1';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private http: HttpClient) { }

  public getCountriesForRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._baseUrl}/region/${region}?fields=name,cca2,ccn3`);
  }

  public getCountriesForCode(code: string): Observable<CountryByCode[] | null> {
    if (!code) {
      return of(null)
    }
    return this.http.get<CountryByCode[]>(`${this._baseUrl}/alpha?codes=${code}`);
  }

  public getCountries(code: string): Observable<CountryByCode> {
    return this.http.get<CountryByCode>(`${this._baseUrl}/alpha?codes=${code}`);
    
  }

  public getCountriesByBorders(borders: string[]): Observable<CountryByCode[]> {
    if (!borders) {
      return of([]);
    }
    const peticiones: Observable<CountryByCode>[] = [];
    borders.forEach(code => {      
      const peticion = this.getCountries(code);
      peticiones.push(peticion)
    });
    
    return combineLatest(peticiones)
  }



  public get regiones(): string[] {
    return [...this._regiones];
  }
}
