import { elements } from './base';

const renderIngredients = async (recepe, parent) => {
  const ingredientsContainer = document.createElement('div');
  ingredientsContainer.className = 'recepe__ingredients-container';
  //   const recepeContainer = document.querySelector('.recepe');
  parent.appendChild(ingredientsContainer);
  const ingredientsTitleContainer = document.createElement('div');
  ingredientsTitleContainer.className = 'recepe__ingredients-title-container';
  const ingredientsTitle = document.createElement('h4');
  ingredientsTitle.textContent = 'Ingredients';
  ingredientsTitle.className = 'recepe__ingredients-title';
  ingredientsTitleContainer.appendChild(ingredientsTitle);
  ingredientsContainer.appendChild(ingredientsTitleContainer);
  const ingredients = await recepe.getIngredients();
  for (let i = 0; i < ingredients.length; i++) {
    const container = document.createElement('div');
    container.className = 'recepe__one-ingredient visually-hidden';
    ingredientsContainer.appendChild(container);
    const ingredientName = document.createElement('h5');
    ingredientName.textContent = ingredients[i][0];
    ingredientName.className = 'recepe__ingredients-name';
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
const renderInstructions = (recepe, parent) => {
  const instructionsContainer = document.createElement('div');
  instructionsContainer.className = 'recepe__instructions-container';
  parent.appendChild(instructionsContainer);
  for (let i = 0; i < recepe.length; i++) {
    if (recepe != '') {
      const p = document.createElement('p');
      p.className = 'recepe__instructions-p';
      p.textContent = `${recepe[i]}`;
      instructionsContainer.appendChild(p);
    }
  }
};
export const renderRecepes = async (recepe) => {
  const video = await recepe.getVideo();
  const instructions = await recepe.getInstructions();
  const markup = `<section class="second-screen">
  <div class="recepe">
  <h3 class="recepe__title">${recepe.title}</h3>
 
  <div class="recepe__video-container"><iframe class="recepe__video" src=${video} width="auto" height="auto" frameborder="0"></iframe></div>
  </div>
  </section>`;

  elements.main.insertAdjacentHTML('beforeend', markup);
  const recepeContainer = document.querySelector('.recepe');
  renderIngredients(recepe, recepeContainer);
  renderInstructions(instructions, recepeContainer);
};
