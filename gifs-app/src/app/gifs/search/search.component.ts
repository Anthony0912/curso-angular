import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void { }

  public seach(): void {
    const value:string = this.txtSearch.nativeElement.value;
    if (value.trim().length === 0) {
      return;
    }
    this.gifsService.searchGifs(value, 12)
    this.txtSearch.nativeElement.value = '';
  }

}
