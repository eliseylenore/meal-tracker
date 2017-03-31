import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div>
    <div *ngIf = "selectedFood.name">
      <div class="form-group">
        <input [(ngModel)]="selectedFood.name" class='form-control'>
      </div>
      <div class="form-group">
        <input [(ngModel)]="selectedFood.notes" class='form-control'>
      </div>
      <div class="form-group">
        <input [(ngModel)]="selectedFood.calories" class='form-control'>
      </div>
    <button class="btn btn-info" (click)='finishedEdit()'>Done</button>
    </div>
  </div>
  `
})

export class EditFoodComponent {
  @Input() selectedFood: Food;
  @Output() editClickSender = new EventEmitter();

  finishedEdit() {
    this.editClickSender.emit();
  }
}
