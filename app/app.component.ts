import { Component } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';
import { food } from './food.component';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <food></food>
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
