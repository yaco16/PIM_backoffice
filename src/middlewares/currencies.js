/* eslint-disable no-console */
import axios from 'axios';
import { FETCH_CURRENCIES, saveCurrencies } from 'src/actions/currencies';

const currencies = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CURRENCIES: {
      console.log('je suis dans le MW de Currencies');
      axios
        .get('http://localhost:2222/v1/currencies/')
        .then((response) => {
          // console.log('MW:', response);
          // console.log(typeof response.data);
          store.dispatch(saveCurrencies(response.data));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

export default currencies;
