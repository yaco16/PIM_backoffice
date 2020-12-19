/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import store from 'src/store';
import { fetchCountries } from 'src/actions/countries';

export const deleteCountry = (id) => {
  const API_URL = `http://localhost:2222/v1/countries/${id}`;
  return axios
    .delete(API_URL)
    .then((response) => {
      if (response.status === 200) {
        store.dispatch(fetchCountries());
      }
    })
    .catch((error) => console.log(error));
};

// eslint-disable-next-line camelcase
export const createCountry = (data) => {
  console.log('dans request :', data.iso_code);
  const API_URL = 'http://localhost:2222/v1/countries/';
  // return 'axios désactivé';
  return axios
    .post(API_URL, {
      name: data.name,
      phone_prefix: data.phone_prefix,
      iso_code: data.iso_code,
      zone_id: '1',
      currency_id: '1',
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => console.log(error));
};

export const updateCountry = (country) => {
  const API_URL = `http://localhost:2222/v1/countries/${country.id}`;

  return axios
    .put(API_URL, country)
    .then((response) => {
      if (response.status === 200) {
        store.dispatch(fetchCountries());
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
