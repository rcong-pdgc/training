import http from "../http-common";

class TutorialDataService {
  getAll() {
    console.log("Get all");
    return http.get("");
  }

  get(id) {
    console.log("Get");
    return http.get(`${id}`, {params: {id: id}});
  }

  create(data) {
    console.log("Create");
    return http.post("", data);
  }

  update(id, data) {
    console.log("Update");
    return http.put(`${id}`, data);
  }

  delete(id) {
    console.log("Delete");
    return http.delete(`${id}`);
  }
}

export default new TutorialDataService();
