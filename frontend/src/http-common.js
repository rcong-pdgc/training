import axios from "axios";

export default axios.create({
  baseURL: "postgres-rds.cdfxk7sszzkb.us-west-2.rds.amazonaws.com",
  headers: {
    "Content-type": "application/json"
  }
});
