import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'food-container',
  template: `
    <div>
      <new-food (newFoodSender)="addNewFood($event)"></new-food>
      <food-list [foodList]="foodList" (clickSender)="selectEditFood($event)"></food-list>
      <edit-food [selectedFood]="selectedFood" (editClickSender)="finishEditFood($event)"></edit-food>
    </div>
  `
})

export class FoodComponent {
  @Input() foodList: Food[];
  selectedFood: Food = new Food(null, null, NaN);

  selectEditFood(food) {
    this.selectedFood = food;
  }

  finishEditFood() {
    this.selectedFood = new Food(null, null, NaN);
  }

  addNewFood(foodToAdd: Food) {
    this.foodList.push(this.selectedFood);
  }
}
