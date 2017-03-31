import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template:`
  <div *ngFor='let food of foodList'>
    <h2>{{food.name}}</h2>
    <h5>Calories: {{food.calories}}</h5>
    <h5>{{food.notes}}</h5>
    <button class="btn btn-info" (click)="editButtonClicked(food)">Edit</button>
  </div>
  `
})

export class foodListComponent {
  @Input() foodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
