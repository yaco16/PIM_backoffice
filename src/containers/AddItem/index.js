/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItem from 'src/components/AddItem';
import { createItem } from 'src/actions/addItem';

const mapStateToProps = (state) => ({
  fullState: state,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: () => {
    dispatch(createItem());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
