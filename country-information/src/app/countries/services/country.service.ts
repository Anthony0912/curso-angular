import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private urlV2: string = "https://restcountries.com/v2/"
  private urlV3: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  private get httpParams(): HttpParams {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population,alpha3Code');
  }

  public searchCountry(search: string): Observable<Country[]> {
    const url: string = `${this.urlV3}/name/${search}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }
  // Otra forma de trabajar catch
  //return this.http.get(url).pipe(catchError(err => of([])))

  public searchCapital(search: string): Observable<Country[]> {
    const url: string = `${this.urlV3}/capital/${search}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

  public searchCountryByCode(id: string): Observable<Country[]> {
    const url: string = `${this.urlV3}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }

  public searchCountryByRegion(region: string): Observable<Country[]> {
    const url: string = `${this.urlV2}/regionalbloc/${region}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }
}

// Con pipe
// return this.http.get<Country[]>(url, { params: this.httpParams }).pipe(tap(console.log))