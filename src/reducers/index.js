import { combineReducers } from 'redux';
import countries from './countries';
import currencies from './currencies';
import homeCategories from './homeCategories';
import addItem from './addItem';
import updateItem from './updateItem';

export default combineReducers({
  countries,
  currencies,
  homeCategories,
  addItem,
  updateItem,
});
