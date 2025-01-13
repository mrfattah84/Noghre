import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const API_URL: string = import.meta.env.VITE_API_URL;
const axiosClient = axios.create({
  baseURL: API_URL,
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

const GetImgUrl = (key: string) => {
  return key;
};

export default {
  GetServices,
  GetWorkers,
  GetImgUrl,
};
