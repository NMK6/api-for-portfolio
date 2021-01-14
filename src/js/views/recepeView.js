import { elements } from './base';

const renderIngredients = async (recepe, parent) => {
  const ingredientsContainer = document.createElement('div');
  ingredientsContainer.className =
    'recepe__ingredients-container visually-hidden';

  parent.appendChild(ingredientsContainer);
  const ingredientsTitleContainer = document.createElement('div');
  ingredientsTitleContainer.className = 'recepe__ingredients-title-container';
  const ingredientsTitle = document.createElement('h4');
  ingredientsTitle.textContent = 'Ingredients';
  ingredientsTitle.className = 'recepe__ingredients-title';
  ingredientsTitleContainer.appendChild(ingredientsTitle);
  ingredientsContainer.appendChild(ingredientsTitleContainer);
  const ingredientContainer = document.createElement('div');
  ingredientContainer.className = 'recepe__ingredient-container';
  ingredientsContainer.appendChild(ingredientContainer);
  const ingredients = await recepe.getIngredients();
  for (let i = 0; i < ingredients.length; i++) {
    const container = document.createElement('div');
    container.className = 'recepe__one-ingredient';
    ingredientContainer.appendChild(container);
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
  instructionsContainer.className =
    'recepe__instructions-container visually-hidden';
  const title = document.createElement('h4');
  title.textContent = 'Instructions';
  title.className = 'recepe__instructions-title';
  instructionsContainer.appendChild(title);
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
const pickRecepesSesction = (e) => {
  const sections = Array.from(
    document.querySelector('.recepe__sections').children
  );
  sections.forEach((element) => {
    if (!element.classList.contains('visually-hidden')) {
      element.classList.add('visually-hidden');
      console.log(element);
    }
  });
  document
    .querySelector(`.recepe__${e.target.firstChild.nodeValue}-container`)
    .classList.remove('visually-hidden');
};
export const showRecepesSection = (e) => {
  e.preventDefault();
  if (
    e.target.firstChild.nodeValue == 'ingredients' ||
    e.target.firstChild.nodeValue == 'instructions' ||
    e.target.firstChild.nodeValue == 'video'
  ) {
    pickRecepesSesction(e);
  }
};
export const renderRecepes = async (recepe) => {
  const video = await recepe.getVideo();

  const instructions = await recepe.getInstructions();
  if (!document.querySelector('.second-screen')) {
    const secondScreen = document.createElement('section');
    secondScreen.className = 'second-screen';
    elements.main.appendChild(secondScreen);
  }
  let iWidth = '';
  let iHeight = '';
  elements.widht > 1500
    ? (iWidth = 853)
    : elements.width > 1000
    ? (iWidth = 640)
    : (iWidth = 560);
  elements.height > 1500
    ? (iHeight = 505)
    : elements.width > 1000
    ? (iHeight = 385)
    : (iHeight = 340);
  const markup = `<div class="recepe__title-container"><p class="recepe__titles recepe__titles--one"><span class="recepe__titles-span">ingredients</span></p><p class="recepe__titles recepe__titles--two"><span class="recepe__titles-span">instructions</span></p><p class="recepe__titles recepe__titles--three"><span class="recepe__titles-span">video</span></p></div><div class='recepe'>
  <h3 class="recepe__title">${recepe.title}</h3><div class="recepe__sections">
  <div class="recepe__video-container"><iframe class="recepe__video" src=${video} width=${iWidth} height=${iHeight} frameborder="0"></iframe><div class="recepe__info-container><p class="recepe__info-p>Category: ${recepe.category}</p><p class="recepe__info-p">Cuisine: ${recepe.cuisine}</p><p class="recepe__info-p>Ingredients: ${recepe.cuisine}</p></div></div>
  </div></div>
  `;

  const secondScreen = document.querySelector('.second-screen');

  secondScreen.insertAdjacentHTML('beforeend', markup);
  const recepeContainer = document.querySelector('.recepe__sections');
  renderIngredients(recepe, recepeContainer);
  renderInstructions(instructions, recepeContainer);
};

export const clearRecepe = () => {
  if (document.querySelector('.second-screen')) {
    const secondScreen = document.querySelector('.second-screen');
    while (secondScreen.firstChild) {
      secondScreen.removeChild(secondScreen.firstChild);
    }
  }
};
