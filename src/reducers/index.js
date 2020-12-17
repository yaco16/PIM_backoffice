import { combineReducers } from 'redux';
import countries from './countries';
import currencies from './currencies';

export default combineReducers({
  countries,
  currencies,
});
