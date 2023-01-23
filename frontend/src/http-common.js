import axios from "axios";

export default axios.create({
  baseURL: "https://vxyqi9vmph.execute-api.us-west-2.amazonaws.com/default/",
  headers: {
    "Content-type": "application/json"
  }
});
