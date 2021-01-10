import { elements } from './base';

const renderIngredients = async (recepe) => {
  const ingredientsContainer = document.createElement('div');
  ingredientsContainer.className = 'recepe__ingredients-container';
  const recepeContainer = document.querySelector('.recepe');
  recepeContainer.appendChild(ingredientsContainer);
  const ingredients = await recepe.getIngredients();
  console.log(ingredients);
  for (let i = 0; i < ingredients.length; i++) {
    const container = document.createElement('div');
    container.className = 'ingredients-container__conainer';
    ingredientsContainer.appendChild(container);
    const ingredientName = document.createElement('h4');
    ingredientName.textContent = ingredients[i][0];
    ingredientName.className = 'recepe__ingredients-title';
    const ingredientMeasure = document.createElement('p');
    ingredientMeasure.textContent = ingredients[i][1];
    ingredientMeasure.className = 'recepe__ingredients-measure';
    const ingredientImage = document.createElement('img');
    ingredientImage.src = ingredients[i][2];
    ingredientImage.alt = ingredients[i][0];
    ingredientImage.className = 'recepe__ingredients-img';
    container.appendChild(ingredientName);
    container.appendChild(ingredientMeasure);
    container.appendChild(ingredientImage);
  }
};
export const renderRecepes = (recepe) => {
  const markup = `<section class="second-screen">
  <div class="recepe">
  <h3 class="recepe__title">${recepe.title}</h3>
  </div>
  </section>`;
  elements.firstScreen.classList.add('first-screen__squiz');
  elements.main.insertAdjacentHTML('beforeend', markup);
  renderIngredients(recepe);
};
