/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItem from 'src/components/Modal/AddItem';

const mapStateToProps = (state) => {
  console.log('state du container :', state);
  return {
    fullState: state,
  };
};

// const mapStateToProps = (state) => {
//   // console.log('getCurrenciesItemName:', getCurrencies);
//   // console.log('state:', getCurrencies(state));
//   return {
//     currenciesName: getCurrencies(state),
//     countriesName: state.countries.itemName,
//   };
// };

export default connect(mapStateToProps, null)(AddItem);
