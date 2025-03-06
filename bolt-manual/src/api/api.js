// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Replace with your backend URL
});

// Example API calls
export const fetchLoginActivity = async () => {
  return api.get('/login-activity');
};

export const fetchActiveDevices = async () => {
  return api.get('/active-devices');
};

// Other API calls for fetching data...
