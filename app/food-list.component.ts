import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';

@Component({
  selector: 'food-list',
  template:`
  <ul class="nav nav-tabs">
    <li role="presentation" [class.active]="filterByCalories === 'allFoods'" (click)="setFilter('allFoods')"><a href="#">All Foods</a></li>
    <li role="presentation" (click)="setFilter('lowCalorie')" [class.active]="filterByCalories === 'lowCalorie'"><a href="#">Low Calorie</a></li>
    <li role="presentation" (click)="setFilter('highCalorie')" [class.active]="filterByCalories === 'highCalorie'" [class.active]="filterByCalories === 'highCalorie'"><a href="#">High Calorie</a></li>
  </ul>
  <div *ngFor='let food of day.foods | calories: filterByCalories'>
    <h2>{{food.name}}</h2>
    <h5>Calories: {{food.calories}}</h5>
    <h5>{{food.notes}}</h5>
    <button class="btn btn-info" (click)="editButtonClicked(food)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() day: Day;
  @Output() clickSender = new EventEmitter();
  filterByCalories: string="allFoods";

  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  setFilter(value) {
    this.filterByCalories = value;
  }
}
