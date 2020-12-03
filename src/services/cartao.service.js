import http from "../api";

class CartaoDataService {
  getAll() {
    return http.get("/cartao");
  }

  get(id) {
    return http.get(`/cartao/${id}`);
  }

  getVacinasCartao(id) {
    return http.get(`/cartao/${id}/vacinas`);
  }

  create(data) {
    return http.post("/cartao", data);
  }

  update(id, data) {
    return http.put(`/cartao/${id}`, data);
  }

  vacinar(id, codigo) {
    return http.patch(`/cartao/${id}/${codigo}`);
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