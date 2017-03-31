import { Food } from './food.model';

export class Day {

  public calories: number = this.totalCalories(this.foods);

  constructor(
    public date: Date,
    public foods: Food[]
  ){ }

  public totalCalories(foods: Food[]) {
    var calories: number = 0;
    for(let food of foods) {
      calories += calories;
    }
    return calories;
  }
}
