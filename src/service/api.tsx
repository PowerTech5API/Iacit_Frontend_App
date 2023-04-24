import axios from 'axios';

const api = axios.create({
    baseURL: "https://iacit.herokuapp.com/api/"
})

export default api;