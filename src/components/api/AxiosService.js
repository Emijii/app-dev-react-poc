import Axios from './Axios';
import AxiosPerformance from "./AxiosPerformance";

const get15 = () =>{
    return Axios.get("/products");
}

const get2000 = () => {
    return AxiosPerformance.get("/105eeeab");
};

const get5000 = () => {
    return AxiosPerformance.get("/43f59ddd");
};

const get10000 = () => {
    return AxiosPerformance.get("/f8e1698d");
};

const get = id => {
    return AxiosPerformance.get(`/105eeeab/${id}`);
};

const create = data => {
    return AxiosPerformance.post("/105eeeab", data);
};

const update = (id, data) => {
    return AxiosPerformance.put(`/105eeeab/${id}`, data);
};

const remove = id => {
    return AxiosPerformance.delete(`/105eeeab/${id}`);
};

const removeAll = () => {
    return AxiosPerformance.delete(`/105eeeab`);
};

export default {
    get15,
    get2000,
    get5000,
    get10000,
    get,
    create,
    update,
    remove,
    removeAll
};