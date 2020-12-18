/* eslint-disable no-console */
import { SAVE_COUNTRIES } from 'src/actions/countries';

// const initialState = {
//   name: '',
//   phone_prefix: '',
//   iso_code: '',
//   zone_id: '',
//   currency_id: '',
// };

const initialState = {
  countries: [],
};

const countries = (state = initialState, action = {}) => {
  console.log('initialState:', initialState);
  switch (action.type) {
    case SAVE_COUNTRIES: {
      // console.log('je suis dans le reducer SAVE_COUNTRIES de Countries');
      console.log('action.countries', action.countries);
      // console.log(...action.countries);
      return {
        ...state,
        countries: action.countries,
      };
      // break;
    }
    default:
      return state;
  }
};

export default countries;
