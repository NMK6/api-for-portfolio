import { elements } from './base';

const renderIngredients = (arr) => {
  arr.array.forEach((element) => {
    const container = document.createElement('div');
    container.className = 'ingredients-container__conainer';
  });
};
const renderRecepes = (recepe) => {
  const markup = `<section class="second-screen"><div class="recepe"><h3 class="recepe__title">${recepe.title}</h3><div class="recepe__ingredients-container></div></section>
}`;
  elements.main.insertAdjacentHTML('beforeend', markup);
  const ingredientsContainer = document.querySelector(
    '.recepe__ingredients-container'
  );
  renderIngredients = recepe.getIngredients();
};
