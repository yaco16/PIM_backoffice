/* eslint-disable no-console */
import { connect } from 'react-redux';
import Currency from 'src/components/Currency';
// import { fetchCurrencies } from 'src/actions/currencies';

const mapStateToProps = (state) => ({
  currencies: state.currencies.list,
  modalIsOpen: state.currencies.modalIsOpen,
});

export default connect(mapStateToProps)(Currency);
