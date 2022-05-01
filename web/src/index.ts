import axios from 'axios';
import { BASE_URL } from './models/User';

// axios.post(`${BASE_URL}/users`, { name: 'Skolo', age: 39 });

axios.get(`${BASE_URL}/users/1`);
