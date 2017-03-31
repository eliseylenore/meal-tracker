import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <button *ngIf="!showNewFoodForm" class="btn btn-info" (click)="newFoodForm()">New Food</button>
  <div *ngIf="showNewFoodForm">
    <div class="form-group">
      <input class="form-control" #newFoodName>
    </div>
    <div class="form-group">
      <input class="form-control" #newFoodNotes>
    </div>
    <div class="form-group">
      <input class="form-control" #newFoodCalories>
    </div>
    <button (click)="makeNewFood" class="btn btn-info">Add</button>
  </div>
  `
})

export class newFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  showNewFoodForm = false;

  newFoodForm() {
    this.showNewFoodForm = true;
  }

  makeNewFood(name: string, notes: string, calories: number) {
    var newFood: Food = new Food(name, notes, calories);
    this.newFoodSender.emit(newFood);
    this.showNewFoodForm = false;
  }
}
