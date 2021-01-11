/* eslint-disable no-console */
import { connect } from 'react-redux';
import Country from 'src/components/Country';
// import { fetchCountries } from 'src/actions/countries';

const mapStateToProps = (state) => ({
  countries: state.countries.list,
});

export default connect(mapStateToProps)(Country);
