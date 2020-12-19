/* eslint-disable no-console */
import { connect } from 'react-redux';
import Country from 'src/components/Country';
import { fetchCountries } from 'src/actions/countries';

const mapStateToProps = (state) => {
  console.log('state:', state.countries);
  return { countries: state.countries };
};

// const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: () => {
    // console.log('je suis dans le container de Country');
    dispatch(fetchCountries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Country);
