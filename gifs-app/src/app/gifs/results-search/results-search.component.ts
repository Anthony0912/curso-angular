import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/gifs.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-results-search',
  templateUrl: './results-search.component.html',
  styles: [
  ]
})
export class ResultsSearchComponent implements OnInit {


  constructor(private gifsService: GifsService) { }

  ngOnInit(): void { }
  
  public handleOnClickPreviousPage() :void {
    if (this.page >= 10) {
      this.gifsService.searchGifs(this.lastSearch, this.page - 12)
    }
  }
  
  public handleOnClickNextPage() :void {
    this.gifsService.searchGifs(this.lastSearch, this.page + 12)
  }

  public get results(): Gif[] {
    return this.gifsService.results;
  }

  public get history(): string[] {
    return this.gifsService.history;
  }
  
  public get lastSearch(): string {
    return this.gifsService.lastSearch.replace(/['"]+/g, '');
  }
  
  public get page(): number {
    return this.gifsService.page;
  }

  
}
