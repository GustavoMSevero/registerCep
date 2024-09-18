import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.226:8888/web/apiCep',
    timeout: 10000, // 10 seconds
});

export default api;


