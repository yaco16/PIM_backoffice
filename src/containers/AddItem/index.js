/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItem from 'src/components/AddItem';
import { createItem, updateModalOpening, updateLoader } from 'src/actions/addItem';

const mapStateToProps = (state) => ({
  fullState: state,
  modalIsOpen: state.addItem.modalIsOpen,
  loaderIsActive: state.addItem.loaderIsActive,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: () => dispatch(createItem()),
  toggleModal: () => dispatch(updateModalOpening()),
  toggleLoader: () => dispatch(updateLoader()),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
