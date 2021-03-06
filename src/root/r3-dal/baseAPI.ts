import axios from 'axios';

export const instance = axios.create({
    //локально:
    baseURL: 'http://localhost:3007/',

    // gh-pages:
    // baseURL: 'залить бэк на хероку !!! ',
    withCredentials:true

})