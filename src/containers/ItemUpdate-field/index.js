/* eslint-disable no-console */
import { connect } from 'react-redux';
import UpdateItemField from 'src/components/ItemUpdate-field';
import { updateInputValue } from 'src/actions/updateItem';

const mapStateToProps = (state, ownProps) => {
  // console.log('state[ownProps.name]', state.updateItem[ownProps.name]);
  console.log('ici');
  console.log(state[ownProps.name]);
  console.log(state.updateItem.itemToUpdate[ownProps.name]);
  // newValue = state[ownProps.name];

  return {
    placeholder: state.updateItem.itemToUpdate[ownProps.name],
    // value: state.updateItem.itemToUpdate[ownProps.name],
    value: state[ownProps.name],
    // value: newValue,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputValue: (value) => dispatch(updateInputValue(ownProps.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItemField);
