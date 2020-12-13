/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getItem = (value, cb) => {
  const API_URL = 'http://localhost:2222/v1/' + value;
  axios.get(API_URL).then((response) => {
    cb(response.data);
  });
};

export const deleteItem = (value, id) => {
  const API_URL = 'http://localhost:2222/v1/' + value + '/' + id;
  axios.delete(API_URL).then((response) => {
    return console.log(response);
    // return (response.json);
  });
};
