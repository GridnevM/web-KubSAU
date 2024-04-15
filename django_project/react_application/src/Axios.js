import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/', // Адрес вашего Django бэкенда
});

export default instance;