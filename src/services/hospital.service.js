import http from "../http-common";

class HospitalDataService {
  getAll() {
    return http.get("/hospital");
  }

  get(id) {
    return http.get(`/hospital/${id}`);
  }

  create(data) {
    return http.post("/hospital", data);
  }

  update(id, data) {
    return http.put(`/hospital/${id}`, data);
  }

  delete(id) {
    return http.delete(`/hospital/${id}`);
  }

  deleteAll() {
    return http.delete(`/hospital`);
  }

  findByCNES(cnes) {
    return http.get(`/hospital?cnes=${cnes}`);
  }
}

export default new HospitalDataService();