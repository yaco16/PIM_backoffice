/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import store from 'src/store';
import { saveCountries } from 'src/actions/countries';
import { saveCurrencies } from 'src/actions/currencies';

export const getCountries = async () => {
  try {
    const response = await axios.get('http://localhost:2222/v1/countries/');
    store.dispatch(saveCountries(response.data));
  }
  catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line camelcase
export const createCountry = async (data) => {
  try {
    const API_URL = 'http://localhost:2222/v1/countries/';
    // return 'axios désactivé';
    const response = await axios
      .post(API_URL, {
        name: data.name,
        phone_prefix: data.phone_prefix,
        iso_code: data.iso_code,
        zone_id: data.zone_id,
        currency_id: data.currency_id,
      });
    if (response.status === 200) {
      getCountries();
    }
  }
  catch (error) {
    return console.log(error);
  }
};

export const updateCountry = async (country) => {
  try {
    const API_URL = `http://localhost:2222/v1/countries/${country.id}`;
    const response = await axios
      .put(API_URL, country);
    if (response.status === 200) {
      getCountries();
    }
  }
  catch (error) {
    console.log(error);
  }
};

export const deleteCountry = async (id) => {
  try {
    const API_URL = `http://localhost:2222/v1/countries/${id}`;
    const response = await axios.delete(API_URL);
    if (response.status === 200) {
      getCountries();
    }
  }
  catch (error) {
    return console.log(error);
  }
};

//CURRENCY
export const getCurrencies = async () => {
  try {
    const response = await axios.get('http://localhost:2222/v1/currencies/');
    store.dispatch(saveCurrencies(response.data));
  }
  catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line camelcase
export const createCurrency = async (data) => {
  try {
    const API_URL = 'http://localhost:2222/v1/currencies/';
    // return 'axios désactivé';
    const response = await axios
      .post(API_URL, {
        name: data.name,
        symbol: data.symbol,
        iso_code: data.iso_code,
        numeric_iso_code: data.numeric_iso_code,
      });
    if (response.status === 200) {
      getCurrencies();
    }
  }
  catch (error) {
    return console.log(error);
  }
};

export const updateCurrency = async (currency) => {
  console.log('je suis dans updateCurrency)');
  console.log('currency:', currency);
  // try {
  //   const API_URL = `http://localhost:2222/v1/currencies/${currency.id}`;
  //   const response = await axios
  //     .put(API_URL, currency);
  //   if (response.status === 200) {
  //     getCurrencies();
  //   }
  // }
  // catch (error) {
  //   console.log(error);
  // }
};

export const deleteCurrency = async (id) => {
  try {
    const API_URL = `http://localhost:2222/v1/currencies/${id}`;
    const response = await axios.delete(API_URL);
    if (response.status === 200) {
      getCurrencies();
    }
  }
  catch (error) {
    return console.log(error);
  }
};