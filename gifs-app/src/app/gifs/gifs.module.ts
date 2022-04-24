import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsSearchComponent } from './results-search/results-search.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsSearchComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
