import axios from "axios";

const api = axios.create({
    // baseURL: 'https://localhost:8888/web/apiCep',
    // baseURL: 'https://127.0.0.1:8888/web/apiCep',
    baseURL: 'https://192.168.0.226:8888/web/apiCep',
    timeout: 10000, // 10 seconds
    //192.168.0.226:8081
});

export default api;


