import axios from 'axios';

export const instance = axios.create({
    // локально:
    // baseURL: 'http://localhost:3007/',
    // withCredentials:true
    // heroku:

    baseURL: 'https://rocky-mountain-88027.herokuapp.com/',
    withCredentials:true

})