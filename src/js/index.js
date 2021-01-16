import Search from './models/Search';
import Recepe from './models/Recepe';
import { elements } from './views/base';
import * as searchView from './views/searchView';
import * as recepeView from './views/recepeView';

const state = {};
state.index = 0;
const handleSearch = async (e) => {
  e.preventDefault();
  const query = searchView.getInput();

  if (query) {
    recepeView.clearRecepe();
    state.search = new Search(query);
    searchView.clearInput();
    searchView.clearRecepes();

    await state.search.getResult();

    state.recepe = new Recepe(state.search.result.meals[state.index]);

    searchView.squeezeFirstscreen();
    await recepeView.renderRecepes(state.recepe);
    searchView.renderResults(state.search.result.meals);
    document
      .querySelector('.recepe__title-container')
      .addEventListener('click', recepeView.showRecepesSection);
  }
};

elements.searchForm.addEventListener('submit', handleSearch);

// document
//   .querySelector('.recepe__arrows-container')
document.addEventListener('click', async (e) => {
  e.preventDefault;
  console.log(e.target.classList);
  if (e.target.classList.contains('recepe__arrow-right')) {
    state.index++;
    state.recepe = new Recepe(state.search.result.meals[state.index]);
    recepeView.clearRecepe();
    await recepeView.renderRecepes(state.recepe);
    console.log(state.recepe);
  }
});
