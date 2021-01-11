/* eslint-disable no-console */
import axios from 'axios';
import { FETCH_COUNTRIES, saveCountries } from 'src/actions/countries';

const countries = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COUNTRIES: {
      console.log('je suis dans le MW de Countries');
      axios
        .get('http://localhost:2222/v1/countries/')
        .then((response) => {
          // console.log('MW:', response.data);
          store.dispatch(saveCountries(response.data));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
  }
};

// export default countries;
