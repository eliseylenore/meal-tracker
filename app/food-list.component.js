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
var day_model_1 = require('./day.model');
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByCalories = "allFoods";
    }
    FoodListComponent.prototype.editButtonClicked = function (foodToEdit) {
        this.clickSender.emit(foodToEdit);
    };
    FoodListComponent.prototype.setFilter = function (value) {
        this.filterByCalories = value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', day_model_1.Day)
    ], FoodListComponent.prototype, "day", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FoodListComponent.prototype, "clickSender", void 0);
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'food-list',
            template: "\n  <ul class=\"nav nav-tabs\">\n    <li role=\"presentation\" [class.active]=\"filterByCalories === 'allFoods'\" (click)=\"setFilter('allFoods')\"><a href=\"#\">All Foods</a></li>\n    <li role=\"presentation\" (click)=\"setFilter('lowCalorie')\" [class.active]=\"filterByCalories === 'lowCalorie'\"><a href=\"#\">Low Calorie</a></li>\n    <li role=\"presentation\" (click)=\"setFilter('highCalorie')\" [class.active]=\"filterByCalories === 'highCalorie'\" [class.active]=\"filterByCalories === 'highCalorie'\"><a href=\"#\">High Calorie</a></li>\n  </ul>\n  <div *ngFor='let food of day.foods | calories: filterByCalories'>\n    <h2>{{food.name}}</h2>\n    <h5>Calories: {{food.calories}}</h5>\n    <h5>{{food.notes}}</h5>\n    <button class=\"btn btn-info\" (click)=\"editButtonClicked(food)\">Edit</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=food-list.component.js.map