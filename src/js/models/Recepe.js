export default class Recepe {
  constructor(recepe) {
    this.recepe = recepe;
    this.id = recepe.idMeal;
    this.title = recepe.strMeal;
    this.category = recepe.strCategory;
    this.cuisine = recepe.strArea;
    this.description = recepe.strInstructions;
    this.link = recepe.strSource;
    this.video = recepe.strYoutube;
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
  // async getVideoClip() {
  //   this.video = await fetch(
  //     `https://cors-anywhere.herokuapp.com/${this.recepe.strYoutube}`
  //   );
  //   console.log(this.video);
  // }
  async getImage() {
    this.image = await fetch(this.recepe.strMealThumb);
  }
  async getSmallImage() {
    this.image = await fetch(`${this.recepe.strMealThumb}/preview`);
  }
}
