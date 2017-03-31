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
var day_model_1 = require('./day.model');
var AppComponent = (function () {
    function AppComponent() {
        this.dayList = [
            new day_model_1.Day(new Date("2016-05-12"), [new food_model_1.Food("Raisins", "1 cup", 500),
                new food_model_1.Food("Chiclets", "15 pieces", 150),
                new food_model_1.Food("Oatmeal", "1 cup, with blueberries and milk", 350)]),
            new day_model_1.Day(new Date("2016-05-13"), [new food_model_1.Food("Sausage", "6oz", 400),
                new food_model_1.Food("Juice", "1 cup", 200),
                new food_model_1.Food("Banana", "smallish banana with PB", 250)]),
            new day_model_1.Day(new Date("2016-05-14"), [new food_model_1.Food("Jamon", "6oz", 200),
                new food_model_1.Food("Eggies and Toast", "", 600),
                new food_model_1.Food("Fruties", "smallish banana with PB", 29)]),
        ];
        this.selectedDay = this.dayList[0];
    }
    AppComponent.prototype.selectDay = function (sentDay) {
        this.selectedDay = sentDay;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n    <h1>Eat Better</h1>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <day-list [dayList]=\"dayList\" (sendSelectedDay)=\"selectDay($event)\"></day-list>\n      </div>\n      <div class=\"col-md-8\">\n        <food-container [day]=\"selectedDay\"></food-container>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map