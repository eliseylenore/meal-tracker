import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';

@Component({
  selector: 'day-list',
  template:`
  <h1>Food Log</h1>
  <div *ngFor="let day of dayList">
    <div (click)="onSelect(day)">
      <h3>{{day.date.getMonth()+ 1}}/{{day.date.getDay()}}/{{day.date.getFullYear()}}</h3>
      <h5>Total Calories: {{day.calories}}</h5>
    </div>
  </div>
  `
})

export class DayListComponent {
  @Input() dayList: Day[];
  @Output() sendSelectedDay = new EventEmitter();
  selectedDay: Day;

  onSelect(selectedDay) {
    this.sendSelectedDay.emit(selectedDay);
  }
}
