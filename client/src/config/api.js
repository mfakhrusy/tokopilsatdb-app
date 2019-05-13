import { apiUrl } from 'config/config';
import axios from 'axios';

export const getCompanyDetail = (companyUrl) => (
  axios.get(`${apiUrl}/company/${companyUrl}`)
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }))
);

export const getCollectionList = () => (
  axios.get(`${apiUrl}/collection`)
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }))
);

export const getCollectionDetail = (collectionId) => (
  axios.get(`${apiUrl}/collection/${collectionId}`)
    .then((response) => response)
    .catch((error) => ({ details: error, error: true }))
);
