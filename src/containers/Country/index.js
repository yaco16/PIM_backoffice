/* eslint-disable no-console */
import { connect } from 'react-redux';
import Country from 'src/components/Country';
import { fetchCountries } from 'src/actions/countries';

const mapStateToProps = (state) => ({
  countries: state.countries,
});

// const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: () => dispatch(fetchCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Country);
