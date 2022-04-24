import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results-search',
  templateUrl: './results-search.component.html',
  styles: [
  ]
})
export class ResultsSearchComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void { }

  
  public get results() : Gif[] {
    return this.gifsService.results;
  }
  

}
