import Search from './models/Search';
import Recepe from './models/Recepe';
import { elements } from './views/base';
import * as searchView from './views/searchView';
import * as recepeView from './views/recepeView';

const state = {};
const handleSearch = async (e) => {
  e.preventDefault();
  const query = searchView.getInput();
  console.log(query);
  if (query) {
    state.search = new Search(query);
    searchView.clearInput();
    searchView.clearRecepes();
    await state.search.getResult();

    state.recepe = new Recepe(state.search.result.meals[0]);

    searchView.squeezeFirstscreen();
    await recepeView.renderRecepes(state.recepe);
    searchView.renderResults(state.search.result.meals);
  }
};
elements.searchForm.addEventListener('submit', handleSearch);
