import Search from "./models/Search";

const state = {};
const handleSearch = async (e) => {
  e.preventDefault();
  const query = "44418";
  if (query) {
    state.search = new Search(query);
    await state.search.getResult();
  }
};
document.querySelector(".search").addEventListener("submit", handleSearch);
