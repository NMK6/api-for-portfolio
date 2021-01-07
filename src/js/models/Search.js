export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResult() {
    try {
      const url = process.env.API_URL;
      const key = process.env.API_KEY;
      const res = await fetch(
        `${url}api/json/v2/${key}/search.php?s=${this.query}`
      );

      this.result = await res.json();
    } catch (error) {
      alert(error);
    }
  }

  //   async getResult() {
  //     try {
  //       const res = await fetch(
  //         `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.woeid}`
  //       );
  //       this.result = await res.json();
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }
}
