import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';

@Component({
  selector: 'day-list',
  template:`
  <h1>Food Log</h1>
  <div *ngFor="let day of dayList">
    <h3>{{day.date}}</h3>
    <h5>{{day.calories}} calories</h5>
    <h5 *ngFor="let food of day.foods">{{food.calories}}</h5>
  </div>
  `
})

export class DayListComponent {
  @Input() dayList: Day[];
}
