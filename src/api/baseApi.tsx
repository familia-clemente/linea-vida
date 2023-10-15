import axios from 'axios';

const BASE_URL = 'https://api.dropboxapi.com/2';

const accessToken = 'TU_TOKEN_DE_ACCESO';

const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
};

export const baseApi = axios.create({
    baseURL: BASE_URL,
    headers: headers
});

