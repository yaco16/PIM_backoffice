/* eslint-disable no-console */
import { SAVE_COUNTRIES } from 'src/actions/countries';

const initialState = {
  labelFr: [
    { name: 'Nom du pays' },
    { phone_prefix: 'Indicatif téléphonique' },
    { iso_code: 'Code ISO' },
    { zone_id: 'Numéro de zone' },
    { currency_id: 'Numéro de devise' },
  ],
  itemName: 'un pays',
  list: [],
  loading: true,
  // newValue: '',
};

const countries = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COUNTRIES: {
      // console.log('action.countries', action.countries);
      return {
        ...state,
        list: action.countries,
      };
    }

    default:
      return state;
  }
};

export default countries;
