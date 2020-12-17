/* eslint-disable no-console */
import { connect } from 'react-redux';
import Countries from 'src/components/Countries';
import { fetchCountries } from 'src/actions/countries';

// const mapStateToProps = (state) => ({
//   allCountries: state.countries,
// });

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: () => {
    console.log('je suis dans le container de Countries');
    dispatch(fetchCountries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
