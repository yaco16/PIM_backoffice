/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItem from 'src/components/ItemAdd';
import { createItem, updateModalOpening, updateLoader } from 'src/actions/addItem';

const mapStateToProps = (state) => ({
  fullState: state,
  modalIsOpen: state.addItem.modalIsOpen,
  loaderIsActive: state.addItem.loaderIsActive,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (value) => dispatch(createItem(value)),
  toggleModal: () => dispatch(updateModalOpening()),
  toggleLoader: () => dispatch(updateLoader()),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
