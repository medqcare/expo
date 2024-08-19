import axios from "axios";

let baseURL = "http://103.153.60.107:8083";
// let baseURL = 'http://localhost:3000';

const instance = axios.create({
    baseURL: `${baseURL}/api/v1/members/`,
    headers: {
        "x-secret": 123456,
    },
    timeout: 4000,
});

export { baseURL, instance };
