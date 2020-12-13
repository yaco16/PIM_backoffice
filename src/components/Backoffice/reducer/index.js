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

export default reducer;
