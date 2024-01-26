import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';

  changeSearchValue(eventData: Event){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
