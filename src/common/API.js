import axios from 'axios';

const baseURL = (process.env.REACT_APP_URL) ? `${process.env.REACT_APP_URL}/api` : `/api`;

const API = axios.create({
    baseURL: baseURL
});

export default API;