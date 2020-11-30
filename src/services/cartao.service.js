import http from "../http-common";

class CartaoDataService {
  getAll() {
    return http.get("/cartao");
  }

  get(id) {
    return http.get(`/cartao/${id}`);
  }

  create(data) {
    return http.post("/cartao", data);
  }

  update(id, data) {
    return http.put(`/cartao/${id}`, data);
  }

  insertVacina(sus, codigo) {
    return http.patch(`/cartao/${sus}/${codigo}`);
  }

  delete(id) {
    return http.delete(`/cartao/${id}`);
  }

  deleteAll() {
    return http.delete(`/cartao`);
  }

  findBySUS(sus) {
    return http.get(`/cartao?sus=${sus}`);
  }
}

export default new CartaoDataService();