export default class Recepe {
  constructor(recepe) {
    this.recepe = recepe;
    this.id = recepe.idMeal;
    this.title = recepe.strMeal;
    this.category = recepe.strCategory;
    this.cuisine = recepe.strArea;
    this.link = recepe.strSource;
    this.image = recepe.strMealThumb;
  }
  getInstructions() {
    const instructions = this.recepe.strInstructions;
    const res = instructions.split('STEP');
    this.description = res;
    return this.description;
  }
  getVideo() {
    const video = this.recepe.strYoutube;
    this.video = video.replace('watch?v=', 'embed/');

    return this.video;
  }
  async getIngredients() {
    this.ingredients = [];
    for (let i = 1; i < 21; i++) {
      if (this.recepe[`strIngredient${i}`] != '') {
        const v = this.recepe[`strIngredient${i}`];
        try {
          this.ingredientsImage = await fetch(
            `https://www.themealdb.com/images/ingredients/${v}-Small.png`
          );
          this.ingredientsImage = `https://www.themealdb.com/images/ingredients/${v}-Small.png`;
        } catch {
          this.ingredientsImage = '';
        }

        this.ingredients.push([
          this.recepe[`strIngredient${i}`],
          this.recepe[`strMeasure${i}`],
          this.ingredientsImage,
        ]);
      }
    }
    return this.ingredients;
  }

  async getImage() {
    this.image = await fetch(this.recepe.strMealThumb);
  }
  async getSmallImage() {
    this.image = await fetch(`${this.recepe.strMealThumb}/preview`);
  }
}
