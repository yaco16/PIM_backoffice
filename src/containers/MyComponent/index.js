/* eslint-disable no-console */
import { connect } from 'react-redux';
import MyComponent from 'src/selectors/MyComponent';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    category: state.homeCategories,
  };
};

export default connect(mapStateToProps, mapStateToProps)(MyComponent);
