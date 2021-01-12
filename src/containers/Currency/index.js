/* eslint-disable no-console */
import { connect } from 'react-redux';
import Currency from 'src/components/Currency';
import { updateModalOpening2 } from 'src/actions/updateItem';

const mapStateToProps = (state) => ({
  currencies: state.currencies.list,
  modalIsOpen: state.currencies.modalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(updateModalOpening2()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
