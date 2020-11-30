import http from "../http-common";

class VacinaDataService {
  getAll() {
    return http.get("/vacina");
  }

  get(id) {
    return http.get(`/vacina/${id}`);
  }

  create(data) {
    return http.post("/vacina", data);
  }

  update(id, data) {
    return http.put(`/vacina/${id}`, data);
  }

  delete(id) {
    return http.delete(`/vacina/${id}`);
  }

  deleteAll() {
    return http.delete(`/vacina`);
  }

  findByCODIGO(codigo) {
    return http.get(`/vacina?codigo=${codigo}`);
  }
}

export default new VacinaDataService();