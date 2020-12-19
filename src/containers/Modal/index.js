/* eslint-disable no-console */
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import AddItem from 'src/components/Modal/AddItem';

const getCurrenciesItemName = (state) => state.currencies.itemName;
const getCountriesItemName = (state) => state.currencies.itemName;

export const getCurrencies = createSelector(
  [getCurrenciesItemName],
  (data) => data,
);

export const getCountries = createSelector(
  [getCountriesItemName],
  (data) => data,
);

const mapStateToProps = (state) => {
  // console.log('getCurrenciesItemName:', getCurrencies);
  // console.log('state:', getCurrencies(state));
  return {
    currenciesName: getCurrencies(state),
    countriesName: state.countries.itemName,
  };
};

// export default connect(mapStateToProps, null)(AddItem);
