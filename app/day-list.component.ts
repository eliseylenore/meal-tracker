import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';

@Component({
  selector: 'day-list',
  template:`
  <div *ngFor="let day of dayList">
    <h2>Hello</h2>
  </div>
  `
})

export class DayListComponent {
  @Input() dayList: Day[];
}
