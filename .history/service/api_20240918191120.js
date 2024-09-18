import axios from "axios";

const api = axios.create({
    // baseURL: 'https://localhost:8888/web/apiCep',
    baseURL: 'https://127.0.0.1:8888/web/apiCep',
    timeout: 10000, // 10 seconds
});

export default api;


