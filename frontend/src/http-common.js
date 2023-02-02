import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-lively-marking-376003.cloudfunctions.net/crud-api-b84945f",
  headers: {
    "Content-type": "application/json"
  }
});
