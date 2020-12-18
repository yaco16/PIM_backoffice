/* eslint-disable no-console */
import { SAVE_CURRENCIES } from 'src/actions/currencies';

const initialState = {
  // name: '',
  // symbol: '',
  // iso_code: '',
  // numeric_iso_code: '',
  // itemName: 'une devise',
  currencies: [],
};

const currencies = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENCIES: {
      console.log('je suis dans le reducer SAVE_CURRENCIES de Currencies');
      console.log('action:', action);
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
