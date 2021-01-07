import { elements } from "./base";
export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = "";
};
export const clearRecepes = () => {
  ////change to while firstchild
  elements.searchRecepesList.innerHtml = "";
};

const renderRecepe = (recepe) => {
  console.log(recepe);
  const markup = `<div>${recepe.strMeal}</div><img src=${recepe.strMealThumb}/preview alt=${recepe.strMeal} width="200"><p>${recepe.strInstructions}</p>`;
  elements.searchRecepesList.insertAdjacentHTML("beforeend", markup);
};
export const renderResults = (recepes) => {
  recepes.forEach(renderRecepe);
};
