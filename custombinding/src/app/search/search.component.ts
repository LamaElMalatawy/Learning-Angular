import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  searchValue:string='';
  
  @Output()
  eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  searchEventEmitter(){
    this.eventEmitter.emit(this.searchValue);
  }
}
