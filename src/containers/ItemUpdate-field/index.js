/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import { connect } from 'react-redux';
import UpdateItemField from 'src/components/ItemUpdate-field';
import { updateInputValue } from 'src/actions/updateItem';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  // console.log('fields:', state.updateItem.fields);
  const { fields } = state.updateItem;
  return {
    placeholder: state.updateItem.itemToUpdate[ownProps.name],
    // value: state.updateItem.itemToUpdate[ownProps.name],
    // value: fields[ownProps.name],
    value: state[ownProps.name],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputValue: (value) => dispatch(updateInputValue(ownProps.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItemField);
