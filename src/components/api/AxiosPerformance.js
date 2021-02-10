import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.mocki.io/v1/",
  headers: {
    "Content-type": "application/json"
  }
});