import axios from 'axios';

let baseURL = 'https://api-dev-mobile.medqcare.id/api/v1/members/';
// let baseURL = 'http://localhost:3000';

const instance = axios.create({
    baseURL: `${baseURL}`,
    headers: {
      'x-secret': 123456 
    },
    timeout: 4000
});

export  {
    baseURL,
    instance,
};
