/* eslint-disable no-console */
import { connect } from 'react-redux';
import Currencies from 'src/components/Currencies';
import { fetchCurrencies } from 'src/actions/currencies';

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});
// console.log('je suis dans le container dispatch de Currencies');

// const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getAllCurrencies: () => {
    console.log('je suis dans le container dispatch de Currencies');
    dispatch(fetchCurrencies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
