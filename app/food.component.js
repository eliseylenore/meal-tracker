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
var FoodComponent = (function () {
    function FoodComponent() {
        this.selectedFood = new food_model_1.Food(null, null, NaN);
    }
    FoodComponent.prototype.selectEditFood = function (food) {
        this.selectedFood = food;
    };
    FoodComponent.prototype.finishEditFood = function () {
        this.selectedFood = new food_model_1.Food(null, null, NaN);
    };
    FoodComponent.prototype.addNewFood = function (foodToAdd) {
        this.foodList.push(this.selectedFood);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FoodComponent.prototype, "foodList", void 0);
    FoodComponent = __decorate([
        core_1.Component({
            selector: 'food-container',
            template: "\n    <div>\n      <new-food (newFoodSender)=\"addNewFood($event)\"></new-food>\n      <food-list [foodList]=\"foodList\" (clickSender)=\"selectEditFood($event)\"></food-list>\n      <edit-food [selectedFood]=\"selectedFood\" (editClickSender)=\"finishEditFood($event)\"></edit-food>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodComponent);
    return FoodComponent;
}());
exports.FoodComponent = FoodComponent;
//# sourceMappingURL=food.component.js.map