import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3333' || 'https://omnistack-chile-frontend.herokuapp.com',
});

export default api;