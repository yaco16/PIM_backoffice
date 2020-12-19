/* eslint-disable no-console */
import { connect } from 'react-redux';
import Backoffice from 'src/components/Backoffice';

const mapStateToProps = (state) => {
  console.log('state.homeCategories', state.homeCategories);
  return {
    homeCategories: state.homeCategories,
  };
};

export default connect(mapStateToProps, null)(Backoffice);
