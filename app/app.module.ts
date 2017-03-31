import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { foodListComponent } from './food-list.component';
import { editFoodComponent } from './edit-food.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  foodListComponent, editFoodComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
