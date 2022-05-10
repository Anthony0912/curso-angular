import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = ''
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  public termino: string = '';
  public debounce: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  public search(): void {
    this.onEnter.emit(this.termino);
  }
  public onPress(): void {
    this.debounce.next(this.termino)
  }

}
