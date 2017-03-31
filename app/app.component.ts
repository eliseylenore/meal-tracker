import { Component } from '@angular/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Eat Better</h1>
    <new-food (newFoodSender)="addNewFood($event)"></new-food>
    <food-list [foodList]="foodList" (clickSender)="selectEditFood($event)"></food-list>
    <edit-food [selectedFood]="selectedFood" (editClickSender)="finishEditFood($event)"></edit-food>
  </div>
  `
})

export class AppComponent {
  foodList: Food[] = [new Food("Raisins", "1 cup", 494), new Food("Chiclets", "15 pieces", 150), new Food("Oatmeal", "1 cup, with blueberries and milk", 350)];
  selectedFood = new Food(null, null, NaN);

  selectEditFood(food) {
    this.selectedFood = food;
  }

  finishEditFood() {
    this.selectedFood = new Food(null, null, NaN);
  }

  addNewFood(foodToAdd: Food) {
    this.foodList.push(foodToAdd);
  }
}
