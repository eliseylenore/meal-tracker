export class Day {
  public calories: number = totalCalories();

  constructor(
    public date: date,
    public foods: Food[],
  ){ }

  var totalCalories = function() {
    calories = 0;
    for(let food of foods) {
      calories += food.calories;
    }
    return calories;
  }
}
