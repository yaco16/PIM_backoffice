/* eslint-disable no-console */
import { connect } from 'react-redux';
import Currencies from 'src/components/Currencies';
import { fetchCurrencies } from 'src/actions/currencies';

const mapStateToProps = (state) => {
  console.log('itemName de mapState', state.itemName);
  return {
    currencies: state.currencies,
    itemName: state.currencies.itemName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllCurrencies: () => {
    console.log('je suis dans le container dispatch de Currencies');
    dispatch(fetchCurrencies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
