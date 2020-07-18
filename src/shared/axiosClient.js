import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Accept': 'application/json'
    },
});

const apiClientUnAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Accept': 'application/json'
    },
});

async function get(url, params) {
    return await apiClient.get(url, {
        params: params,
    });
}

async function post(url, params) {
    return await apiClient.post(url, params);
}

export default {
    auth: {
        async login(params = {}) {
            return await apiClientUnAuth.post('auth/login/', params);
        }
    },

};