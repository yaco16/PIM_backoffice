/* eslint-disable no-console */
import { connect } from 'react-redux';
import AddItem from 'src/components/Modal/AddItem';
import { updInputValue } from 'src/actions/addItem';

const mapStateToProps = (state) => {
  console.log('state du container :', state);
  return {
    fullState: state,
    inputValue: state.newValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('je suis dans le dispatch de modal');
  return {
    changeInputValue: (value) => {
      dispatch(updInputValue(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
