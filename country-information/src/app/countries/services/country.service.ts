import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  public searchCountry(search: string): Observable<Country[]> {
    const url: string = `${this.url}/name/${search}`
    return this.http.get<Country[]>(url)

    // Otra forma de trabajar catch
    //return this.http.get(url).pipe(catchError(err => of([])))
  }
 
  public searchCapital(search: string): Observable<Country[]> {
    const url: string = `${this.url}/capital/${search}`
    return this.http.get<Country[]>(url)
  }
  
  public searchCountryByCode(id: string): Observable<Country[]> {
    const url: string = `${this.url}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }

}
