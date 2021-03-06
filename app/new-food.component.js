"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var food_model_1 = require('./food.model');
var NewFoodComponent = (function () {
    function NewFoodComponent() {
        this.newFoodSender = new core_1.EventEmitter();
        this.showNewFoodForm = false;
    }
    NewFoodComponent.prototype.newFoodForm = function () {
        this.showNewFoodForm = true;
    };
    NewFoodComponent.prototype.makeNewFood = function (name, notes, calories) {
        var newFood = new food_model_1.Food(name, notes, calories);
        this.newFoodSender.emit(newFood);
        this.showNewFoodForm = false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewFoodComponent.prototype, "newFoodSender", void 0);
    NewFoodComponent = __decorate([
        core_1.Component({
            selector: 'new-food',
            template: "\n  <button *ngIf=\"!showNewFoodForm\" class=\"btn btn-info\" (click)=\"newFoodForm()\">New Food</button>\n  <div *ngIf=\"showNewFoodForm\">\n    <div class=\"form-group\">\n      <input class=\"form-control\" #newFoodName placeholder=\"Food you ate\">\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" #newFoodNotes placeholder=\"Notes (how much you ate, what time, etc.)\">\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" #newFoodCalories placeholder=\"Calories\">\n    </div>\n    <button (click)=\"makeNewFood(newFoodName.value, newFoodNotes.value, newFoodCalories.value)\" class=\"btn btn-info\">Add</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewFoodComponent);
    return NewFoodComponent;
}());
exports.NewFoodComponent = NewFoodComponent;
//# sourceMappingURL=new-food.component.js.map