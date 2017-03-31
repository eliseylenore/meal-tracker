import { Component } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';
import { FoodComponent } from './food.component';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <food-container></food-container>
  </div>
  `
})

export class AppComponent {
}
