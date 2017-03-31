import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <button *ngIf="!showNewFoodForm" class="btn btn-info" (click)="newFoodForm()">New Food</button>
  <div *ngIf="showNewFoodForm">
    <div class="form-group">
      <input class="form-control" #newFoodName placeholder="Food you ate">
    </div>
    <div class="form-group">
      <input class="form-control" #newFoodNotes placeholder="Notes (how much you ate, what time, etc.)">
    </div>
    <div class="form-group">
      <input class="form-control" #newFoodCalories placeholder="Calories">
    </div>
    <button (click)="makeNewFood(newFoodName.value, newFoodNotes.value, newFoodCalories.value)" class="btn btn-info">Add</button>
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
