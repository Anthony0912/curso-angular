import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SearchGifsResponse, Gif } from "src/app/interfaces/gifs.interface";

@Injectable({
  providedIn: "root",
})
export class GifsService {

  private _history: string[] = [];
  public results: Gif[] = [];
  public lastSearch: string = ''
  public page: number = 12

  constructor(private http: HttpClient) {
    if (localStorage.getItem('history')) {
      this._history = JSON.parse(localStorage.getItem('history')!) || []
    }

    if (localStorage.getItem('results')) {
      this.results = JSON.parse(localStorage.getItem('results')!) || []
    }

    if (localStorage.getItem('last-search')) {
      this.lastSearch = localStorage.getItem('last-search') || ''
    }
  }

  public get history(): string[] {
    return [...this._history];
  }


  public searchGifs(query: string, page: number): void {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history))
      localStorage.setItem('last-search',  JSON.stringify(query))
    }
    this.lastSearch = query

    const params = new HttpParams()
      .set('api_key', environment.API_KEY)
      .set('limit', `${12}`)
      .set('offset', `${page}`)
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${environment.SERVICE_URL}/search`, { params }).subscribe((response: SearchGifsResponse) => {
      this.results = response.data;
      localStorage.setItem('results', JSON.stringify(this.results))
    });

    this.page = page
  }
}
