

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.maraxib.fewnu.app/api/', 
    imageURL: 'https://api.maraxib.fewnu.app/api/storage/', 
});

export default instance;
