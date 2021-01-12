/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItemField from 'src/components/ItemAdd-field';
import { updateInputValue } from 'src/actions/addItem';

const mapStateToProps = (state, ownProps) => ({
  value: state.addItem[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputValue: (value) => dispatch(updateInputValue(ownProps.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemField);
