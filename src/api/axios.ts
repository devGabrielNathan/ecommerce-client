// src/api/axios.ts
import axios from 'axios';

const CONFIG = {
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true, // se você estiver lidando com autenticação via cookie/session
}

export const API_URL = axios.create(CONFIG);
