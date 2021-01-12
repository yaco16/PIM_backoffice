/* eslint-disable no-console */
import { connect } from 'react-redux';
import UpdateItem from 'src/components/ItemUpdate';
import { updateModalOpening2 } from 'src/actions/updateItem';

const mapStateToProps = (state) => {
  // console.log(state.updateItem);
  return {
    // fullState: state,
    modalIsOpen: state.updateItem.modalIsOpen,
    item: state.updateItem.itemToUpdate,
    // loaderIsActive: state.updateItem.loaderIsActive,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log('je suis dans le container de updateItem');
  return {
    // updateItem: (value) => dispatch(updateItem(value)),
    toggleModal: () => dispatch(updateModalOpening2()),
    // toggleLoader: () => dispatch(updateLoader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);
