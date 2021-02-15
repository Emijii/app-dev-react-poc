import Axios from "axios";

export default Axios.create({
  baseURL: "https://my-json-server.typicode.com/MilesSibley/JSON-Server",
  headers: {
    "Content-type": "application/json"
  }
});