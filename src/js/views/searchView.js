import { elements } from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = '';
};
export const clearRecepes = () => {
  /// /change to while firstchild
  elements.searchRecepesList.innerHtml = '';
};

const renderRecepe = (recepe) => {
  const markup = `<div>${recepe.strMeal}</div><img src=${recepe.strMealThumb}/preview alt=${recepe.strMeal} width="200"><p>${recepe.strInstructions}</p>`;

  elements.searchRecepesList.insertAdjacentHTML('beforeend', markup);
};
export const renderResults = (recepes) => {
  recepes.forEach(renderRecepe);
};
export const squeezeFirstscreen = () => {
  elements.firstScreen.classList.add('first-screen__squeeze');
  elements.searchContainer.classList.add('search-squeeze');
  elements.searchForm.classList.add('search-squeeze__form');
  elements.searchInput.classList.add('search-squeeze__field');
  elements.searchTitle.classList.add('search-squeeze__title');
  elements.searchBtn.classList.add('search-squeeze__btn');
  elements.searchBtnSpan.classList.add('search-squeeze__icon');
};
