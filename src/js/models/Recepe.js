export default class Recepe {
  constructor(recepe) {
    this.recepe = recepe;
    this.id = recepe.id;
    this.title = recepe.strMeal;
    this.category = recepe.strCategory;
    this.cuisine = recepe.strArea;
  }

  getIngredients() {
    this.ingredients = [];
    for (let i = 0; i < 20; i++) {
      if (this.recepe.strIngredients != '') {
        this.ingredients.push([
          `this.recepe.strIngredients${i}`,
          `this.recepe.strMeasure${i}`,
        ]);
      }
    }
  }
}
