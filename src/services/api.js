import axios from 'axios';

const api = axios.create({
	baseURL: 'https://omnistack-chile-frontend.herokuapp.com',
});

export default api;