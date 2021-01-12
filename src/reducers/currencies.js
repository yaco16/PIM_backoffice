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
  list: [],
  loading: true,
  modalIsOpen: false,
};

const currencies = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CURRENCIES: {
      return {
        ...state,
        list: action.currencies,
      };
    }
    default:
      return state;
  }
};

export default currencies;
