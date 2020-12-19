/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItemField from 'src/components/AddItemField';
import { updInputValue } from 'src/actions/addItem';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
  inputValue: state.addItem[ownProps.name],
}};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputValue: (value) => dispatch(updInputValue(ownProps.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemField);
