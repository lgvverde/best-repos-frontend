require('dotenv/config')
const axios = require('axios');

export const GITHUB_API = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_API_URL || "https://api.github.com",
    timeout: 10000
});

export const MY_REPO_API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:3333",
    timeout: 10000
});
