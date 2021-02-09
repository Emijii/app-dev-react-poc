import http from "./Axios";

const get2000 = () => {
    return http.get("/105eeeab");
};

const get5000 = () => {
    return http.get("/43f59ddd");
};

const get10000 = () => {
    return http.get("/f8e1698d");
};

const get = id => {
    return http.get(`/105eeeab/${id}`);
};

const create = data => {
    return http.post("/105eeeab", data);
};

const update = (id, data) => {
    return http.put(`/105eeeab/${id}`, data);
};

const remove = id => {
    return http.delete(`/105eeeab/${id}`);
};

const removeAll = () => {
    return http.delete(`/105eeeab`);
};

export default {
    get2000,
    get5000,
    get10000,
    get,
    create,
    update,
    remove,
    removeAll
};