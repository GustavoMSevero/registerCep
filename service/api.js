import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8888/web/apiCep',
    timeout: 10000, // 10 seconds
});

export default api;


