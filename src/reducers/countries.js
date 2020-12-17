/* eslint-disable no-console */
import { SAVE_COUNTRIES } from 'src/actions/countries';

// const initialState = {
//   name: '',
//   phone_prefix: '',
//   iso_code: '',
//   zone_id: '',
//   currency_id: '',
// };

const initialState = {};

const countries = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COUNTRIES: {
      console.log('je suis dans le reducer SAVE_COUNTRIES');
      // break;
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
