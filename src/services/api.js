// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust based on your server

export const fetchCategories = () => {
    return axios.get(`${API_BASE_URL}/categories`);
};

// Add more functions for fetching subcategories, attributes, etc.
