/* eslint-disable no-console */
import { connect } from 'react-redux';
import Countries from 'src/components/Countries';
// import { fetchCountries } from 'src/actions/countries';

// const mapStateToProps = (state) => ({
//   allCountries: state.countries,
// });

const mapStateToProps = (state) => {
  console.log('itemName de mapState', state.countries.itemName);
  return {
    // currencies: state.currencies,
    itemName: state.countries.itemName,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   getAllCountries: () => {
//     console.log('je suis dans le container de Countries');
//     dispatch(fetchCountries());
//   },
// });

export default connect(mapStateToProps, null)(Countries);
