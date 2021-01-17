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
    recepeView.addMobileListener();
  }
};

elements.searchForm.addEventListener('submit', handleSearch);

document.addEventListener('click', async (e) => {
  e.preventDefault;

  if (
    e.target.classList.contains('recepe__arrow-right') ||
    e.target.classList.contains('recepe__arrow-left')
  ) {
    state.max = state.search.result.meals.length;
    if (e.target.classList.contains('recepe__arrow-right')) {
      if (state.index < state.max - 1) {
        state.index++;
      } else {
        state.index = 0;
      }
    }
    if (e.target.classList.contains('recepe__arrow-left')) {
      if (state.index > 0) {
        state.index--;
      } else {
        state.index = state.max - 1;
      }
    }
    state.recepe = new Recepe(state.search.result.meals[state.index]);
    recepeView.clearRecepe();
    await recepeView.renderRecepes(state.recepe);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('recepe__mob-nav')) {
    e.preventDefault();
    recepeView.handleMobNav();
  }
});
