import api from "../api";

class VacinaDataService {
    getAll() {
        return api.get("/vacina");
    }

    get(id) {
        return api.get(`/vacina/${id}`);
    }

    create(data) {
        return api.post("/vacina", data);
    }

    update(id, data) {
        return api.put(`/vacina/${id}`, data);
    }

    delete(id) {
        return api.delete(`/vacina/${id}`);
    }

    deleteAll() {
        return api.delete(`/vacina`);
    }

    findByCODIGO(codigo) {
        return api.get(`/vacina?codigo=${codigo}`);
    }
}

export default new VacinaDataService();