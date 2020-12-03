import api from "../api";

class HospitalDataService {
  getAll() {
    return api.get("/hospital");
  }

  get(id) {
    return api.get(`/hospital/${id}`);
  }

  create(data) {
    return api.post("/hospital", data);
  }

  update(id, data) {
    return api.put(`/hospital/${id}`, data);
  }

  delete(id) {
    return api.delete(`/hospital/${id}`);
  }

  deleteAll() {
    return api.delete(`/hospital`);
  }

  findByCNES(cnes) {
    return api.get(`/hospital?cnes=${cnes}`);
  }
}

export default new HospitalDataService();