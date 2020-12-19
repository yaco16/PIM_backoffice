/* eslint-disable no-console */
import { connect } from 'react-redux';
import Currency from 'src/components/Currency';
import { fetchCurrencies } from 'src/actions/currencies';

const mapStateToProps = (state) => {
  console.log('itemName de mapState');
  return {
    currencies: state.currencies,
    itemName: state.currencies.itemName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllCurrencies: () => {
    console.log('je suis dans le container dispatch de Currency');
    dispatch(fetchCurrencies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
