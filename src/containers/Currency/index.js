/* eslint-disable no-console */
import { connect } from 'react-redux';
import Currency from 'src/components/Currency';
import { fetchCurrencies } from 'src/actions/currencies';

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});

// const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getAllCurrencies: () => dispatch(fetchCurrencies()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Currency);
