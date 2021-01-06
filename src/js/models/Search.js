export default class Search {
  constructor(woeid) {
    this.woeid = woeid;
  }
  async getResult() {
    try {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.woeid}/`
      );
      this.result = await res.json();
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
