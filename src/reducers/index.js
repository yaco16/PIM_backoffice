import { combineReducers } from 'redux';
import countries from './countries';
import currencies from './currencies';
import homeCategories from './homeCategories';

export default combineReducers({
  countries,
  currencies,
  homeCategories,
});
