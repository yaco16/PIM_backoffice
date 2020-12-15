/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import store from './store';
import { fetchCountries } from './actions';

const randomNumber = () => Math.floor(Math.random() * 1000);

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

export const createCountry = (id) => {
  const API_URL = 'http://localhost:2222/v1/countries/';
  return axios
    .post(API_URL, {
      name: id,
      phone_prefix: randomNumber(),
      iso_code: randomNumber() + 1,
      zone_id: '1',
      currency_id: 1,
    })
    .then((response) => {
      if (response.status === 200) {
        store.dispatch(fetchCountries());
      }
    })
    .catch((error) => console.log(error));
};

export const updCountry = (data) => {
  console.log('je suis dans editCountry');
  const API_URL = 'http://localhost:2222/v1/countries/' + data.id;

  return axios
    .put(API_URL, {
      name: data.name,
      phone_prefix: randomNumber(),
      iso_code: randomNumber(),
      zone_id: '1',
      currency_id: 1,
    })
    .then((response) => {
      if (response.status === 200) {
        store.dispatch(fetchCountries());
      }
    })
    .catch((error) => console.log(error));
};
