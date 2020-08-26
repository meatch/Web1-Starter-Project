import axios from 'axios';

const baseURL = (process.env.REACT_APP_URL) ? `${process.env.REACT_APP_URL}/api` : `https://localhost:5020/api`;

const API = axios.create({
    baseURL: baseURL
});

export default API;