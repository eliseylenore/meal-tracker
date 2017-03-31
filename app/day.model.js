"use strict";
var Day = (function () {
    function Day(date, foods) {
        this.date = date;
        this.foods = foods;
        this.calories = this.totalCalories(this.foods);
    }
    Day.prototype.totalCalories = function (foods) {
        var calories = 0;
        for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
            var food = foods_1[_i];
            calories += calories;
        }
        return calories;
    };
    return Day;
}());
exports.Day = Day;
//# sourceMappingURL=day.model.js.map