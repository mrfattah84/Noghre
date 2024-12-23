import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

const GetServices = () => {
  return axiosClient.get('/services' + '?populate=*');
};

const GetWorkers = () => {
  return axiosClient.get('/workers' + '?populate=*');
};

export default {
  GetServices,
  GetWorkers,
};
