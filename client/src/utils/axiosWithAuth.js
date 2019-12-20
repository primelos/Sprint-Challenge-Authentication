import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:4999/api',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;