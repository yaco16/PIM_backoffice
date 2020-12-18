/* eslint-disable no-console */
import { SAVE_COUNTRIES } from 'src/actions/countries';

const initialState = {
  itemName: 'un pays',
  countries: [],
};

const countries = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COUNTRIES: {
      console.log('action.countries', action.countries);
      return {
        ...state,
        countries: action.countries,
      };
    }
    default:
      return state;
  }
};

export default countries;
