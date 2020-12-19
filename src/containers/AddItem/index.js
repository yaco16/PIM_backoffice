/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItem from 'src/components/AddItem';
import { createItem, toggleModal } from 'src/actions/addItem';

const mapStateToProps = (state) => ({
  fullState: state,
  open: state.addItem.open,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: () => dispatch(createItem()),
  toggleOpen: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
