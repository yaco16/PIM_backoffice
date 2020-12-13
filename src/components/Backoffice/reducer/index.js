import { SAVE_COUNTRIES } from '../actions';

const initialState = {
  countries: [
  ],
  currencies: {},
  customers: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COUNTRIES: {
      return {
        ...state,
        countries: action.countries,
      };
    }
    default:
      return state;
  }
};

export default reducer;
