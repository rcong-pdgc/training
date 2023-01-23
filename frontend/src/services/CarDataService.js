import http from "../http-common";

class TutorialDataService {
  getAll() {
    console.log("Get all");
    return http.get("default");
  }

  get(id) {
    console.log("Get");
    return http.get(`default/${id}`);
  }

  create(data) {
    console.log("Create");
    return http.post("default", data);
  }

  update(id, data) {
    console.log("Update");
    return http.put(`default/${id}`, data);
  }

  delete(id) {
    console.log("Delete");
    return http.delete(`default/${id}`);
  }
}

export default new TutorialDataService();
