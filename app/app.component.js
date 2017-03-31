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
var AppComponent = (function () {
    function AppComponent() {
        this.foodList = [new food_model_1.Food("Raisins", "1 cup", 494), new food_model_1.Food("Chiclets", "15 pieces", 150), new food_model_1.Food("Oatmeal", "1 cup, with blueberries and milk", 350)];
        this.selectedFood = new food_model_1.Food(null, null, NaN);
    }
    AppComponent.prototype.selectEditFood = function (food) {
        this.selectedFood = food;
    };
    AppComponent.prototype.finishEditFood = function () {
        this.selectedFood = new food_model_1.Food(null, null, NaN);
    };
    AppComponent.prototype.addNewFood = function (foodToAdd) {
        this.foodList.push(foodToAdd);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n    <h1>Eat Better</h1>\n    <new-food (newFoodSender)=\"addNewFood($event)\"></new-food>\n    <food-list [foodList]=\"foodList\" (clickSender)=\"selectEditFood($event)\"></food-list>\n    <edit-food [selectedFood]=\"selectedFood\" (editClickSender)=\"finishEditFood($event)\"></edit-food>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map