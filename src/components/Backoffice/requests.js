/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import store from './store';
import { fetchCountries } from './actions';

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

export const editCountry = (id) => {
  console.log('je suis dans editCountry');
  console.log(id);
  const API_URL = 'http://localhost:2222/v1/countries/';
  return axios
    .put(API_URL, { name: id,
      phone_prefix: '+399',
      iso_code: '123456',
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
