import { Component } from '@angular/core';
import { Food } from './food.model';
import { Day } from './day.model';
import { FoodComponent } from './food.component';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';
import { DayListComponent } from './day-list.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Eat Better</h1>
    <div class="row">
      <div class="col-md-4">
        <day-list></day-list>
      </div>
      <div class="col-md-8">
        <food-container></food-container>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  dayList:
    Day[] = [
      new Day(new Date("2016-05-12"),
      [new Food("Raisins", "1 cup", 500),
      new Food("Chiclets", "15 pieces", 150),
      new Food("Oatmeal", "1 cup, with blueberries and milk", 350)]),

      new Day(new Date("2016-05-13"),
      [new Food("Sausage", "6oz", 400),
      new Food("Juice", "1 cup", 200),
      new Food("Banana", "smallish banana with PB", 250)]),

      new Day(new Date("2016-05-14"),
      [new Food("Jamon", "6oz", 200),
      new Food("Eggies and Toast", "", 600),
      new Food("Fruties", "smallish banana with PB", 29)]),

    ]

}
