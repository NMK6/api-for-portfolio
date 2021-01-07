import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";

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
    console.log(state.search.result.meals[0].strMeal);
    searchView.renderResults(state.search.result.meals);
  }
};
elements.searchForm.addEventListener("submit", handleSearch);
