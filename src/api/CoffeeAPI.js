import axios from "axios";

export default class CoffeeAPI {

  getCoffess() {
    return axios.get("https://fake-coffee-api.vercel.app/api");
  }

  getCoffee(id) {
    return axios.get(`https://fake-coffee-api.vercel.app/api/${id}`)
  }

  getSortedCoffes(sort){
    return axios.get(`https://fake-coffee-api.vercel.app/api?sort=${sort}`)
  }
  
}
