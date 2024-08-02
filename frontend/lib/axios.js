

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/', 
    imageURL: 'http://localhost:8000/api/storage/', 
});

export default instance;
