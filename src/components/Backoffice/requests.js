/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import store from './store';
import { fetchCountries } from './actions';

export const getCountries = () => {
  axios
    .get('http://localhost:2222/v1/countries/')
    .then((response) => {
      console.log('dans Requests', response);
    })
    .catch((error) => console.log(error));
};

export const deleteCountry = (id) => {
  const API_URL = 'http://localhost:2222/v1/countries/' + id;
  return axios
    .delete(API_URL)
    .then((response) => {
      if (response.status === 200) {
        store.dispatch(fetchCountries());
      }
    })
    .catch((error) => console.log(error));
};
