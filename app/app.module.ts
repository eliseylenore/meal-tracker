import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';

import { FoodComponent } from './food.component';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';

import { DayListComponent } from './day-list.component';

import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    FoodComponent,
    FoodListComponent,
    EditFoodComponent,
    NewFoodComponent,
    DayListComponent,
    CaloriesPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
