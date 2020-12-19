/* eslint-disable no-console */
import { SAVE_CURRENCIES } from 'src/actions/currencies';

const initialState = {
  labelFr: [
    { name: 'Nom de la devise' },
    { symbol: 'Symbole monétaire' },
    { iso_code: 'Code ISO' },
    { numeric_iso_code: 'Code ISO numérique' },
  ],
  itemName: 'une devise',
  currencies: [],
};

const currencies = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENCIES: {
      console.log('action:', state.currencies.itemName);
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
