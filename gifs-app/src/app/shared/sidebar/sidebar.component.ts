import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void { }

  public get history() : string[] {
    return this.gifsService.history;
  }
  

  public handleOnClickSearch(search:string):void {
    try {
     this.gifsService.searchGifs(search, 12)
     localStorage.setItem('last-search', search);
    } catch (error) {
      
    }
  }
}
