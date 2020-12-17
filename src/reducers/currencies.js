/* eslint-disable no-console */
import { SAVE_CURRENCIES } from 'src/actions/currencies';

const initialState = {
  // name: '',
  // symbol: '',
  // iso_code: '',
  // numeric_iso_code: '',
  currencies: [],
};

const currencies = (state = initialState, action = {}) => {
  console.log('je suis dans le reducer de Currencies');
  switch (action.type) {
    case SAVE_CURRENCIES: {
      console.log('je suis dans le reducer SAVE_CURRENCIES');
      console.log('action:', action);
      // break;
      return {
        ...state,
        currencies: action.currencies,
      };
    }
    default:
      return state;
  }
};

export default currencies;
