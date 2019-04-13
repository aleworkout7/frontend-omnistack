import axios from 'axios';

const api = axios.create({
	baseURL: 'https://omnistack-chile.herokuapp.com',
});

export default api;