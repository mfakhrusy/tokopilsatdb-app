import { apiUrl, baseUrl } from 'config/config';
import axios from 'axios';

export const getCompanyDetail = (companyUrl) => {
  return axios.get(`${apiUrl}/company/${companyUrl}`)
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }));
};

export const getUserDetail = (userId, token) => {
  return axios.get(`${apiUrl}/user/${userId}`, {
    headers: {
      token,
    },
  })
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }));
};

export const login = (username, password) => {
  return axios.post(`${baseUrl}/auth/login`, {
    username,
    password
  })
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }));
};

export const addCollection = ({ media, label }) => {
  let data = new FormData();

  data.append('file', media);
  data.append('label', label);
  return axios.post(`${apiUrl}/collection/add`, data)
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }));
};

export const getCollectionList = () => (
  axios.get(`${apiUrl}/collection`)
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }))
);

export const addProduct = ({
  media,
  name,
  description,
  collectionId,
  price,
}) => {
  let data = new FormData();

  data.append('file', media);
  data.append('productName', name);
  data.append('productDescription', description);
  data.append('collectionId', collectionId);
  data.append('price', price);

  return axios.post(`${apiUrl}/product/add`, data)
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }));
};
