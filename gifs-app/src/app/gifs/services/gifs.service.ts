import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SearchGifsResponse, Gif } from "src/app/interfaces/gifs.interface";

@Injectable({
  providedIn: "root",
})
export class GifsService {
  constructor(private http: HttpClient) { }

  private _history: string[] = [];
  public results: Gif[] = [];

  public get history(): string[] {
    return [...this._history];
  }

  public searchGifs(query: string): void {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${environment.API_KEY}&q=${query}&limit=10`
      )
      .subscribe((response: SearchGifsResponse) => {
        this.results = response.data;
      });
  }
}
