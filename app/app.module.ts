import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { foodListComponent } from './food-list.component';
import { editFoodComponent } from './edit-food.component';
import { newFoodComponent } from './new-food.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  foodListComponent, editFoodComponent, newFoodComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
