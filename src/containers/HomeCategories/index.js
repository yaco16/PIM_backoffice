/* eslint-disable no-console */
import { connect } from 'react-redux';
import HomeCategories from 'src/components/Home/HomeCategories';

const mapStateToProps = (state) => {
  // console.log('state.homeCategories', state.homeCategories);
  return {
    homeCategories: state.homeCategories,
  };
};

export default connect(mapStateToProps, null)(HomeCategories);
