export default class Recepe {
  constructor(recepe) {
    this.recepe = recepe;
    this.id = recepe.idMeal;
    this.title = recepe.strMeal;
    this.category = recepe.strCategory;
    this.cuisine = recepe.strArea;
  }

  getIngredients() {
    this.ingredients = [];
    for (let i = 1; i < 21; i++) {
      if (this.recepe[`strIngredient${i}`] != '') {
        this.ingredients.push([
          this.recepe[`strIngredient${i}`],
          this.recepe[`strMeasure${i}`],
        ]);
      }
    }

    return this.ingredients;
  }
}
