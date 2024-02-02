import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all:number=0;
  @Input() premium:number=0;
  @Input() free:number=0;

  selectedRadioBtn:string='All';

  @Output()
  filterSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioBtnSelectionChanged(){
    this.filterSelectionChanged.emit(this.selectedRadioBtn);
  }
}
