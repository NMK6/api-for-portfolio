export default class Search {
  constructor(woeid) {
    this.woeid = woeid;
  }
  async getResult() {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.woeid}/`
      );
      this.result = await res.json();
    } catch (error) {
      alert(error);
    }
  }

  //   async getResult() {
  //     try {
  //       const res = await fetch(
  //         `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.woeid}/`
  //       );
  //       this.result = await res.json();
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }
}
