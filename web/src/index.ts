import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// axios.post(`${BASE_URL}/users`, { name: 'Skolo', age: 39 });

axios.get(`${BASE_URL}/users/1`);
