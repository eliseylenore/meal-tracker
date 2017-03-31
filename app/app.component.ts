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
    <h1>Eat Better</h1>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-md-8">
        <food-container></food-container>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
}
