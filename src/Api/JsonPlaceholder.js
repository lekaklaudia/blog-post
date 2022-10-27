import axios from "axios";
export default axios.create({
  method: "get",
  baseURL: "https://jsonplaceholder.typicode.com",
});
