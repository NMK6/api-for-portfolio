export default class Search {
  constructor(woeid) {
    this.woeid = woeid;
  }
  //   async getResult() {
  //     const proxy = "https://cors-anywhere.herokuapp.app/";
  //     const url = `${proxy}https://www.metaweather.com/api/location/${this.woeid}/`;
  //     try {
  //       const res = await fetch(url);
  //       console.log(res);
  //       this.result = await res.json();
  //       console.log(this.result);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }

  getResult() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.woeid}/`
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        this.res = data;
        console.log(this.res);
      })
      .catch((error) => console.log(error));
  }
}
