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
var DayListComponent = (function () {
    function DayListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DayListComponent.prototype, "dayList", void 0);
    DayListComponent = __decorate([
        core_1.Component({
            selector: 'day-list',
            template: "\n  <h1>Food Log</h1>\n  <div *ngFor=\"let day of dayList\">\n    <h3>{{day.date.getMonth()+ 1}}/{{day.date.getDay()}}/{{day.date.getFullYear()}}</h3>\n    <h5>Total Calories: {{day.calories}}</h5>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DayListComponent);
    return DayListComponent;
}());
exports.DayListComponent = DayListComponent;
//# sourceMappingURL=day-list.component.js.map