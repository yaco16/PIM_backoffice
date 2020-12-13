import { connect } from 'react-redux';
import Countries from '../../components/Countries';
import { saveCountries } from '../../actions';

const mapStateToProps = (state) => ({
  allCountries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: (value) => dispatch(saveCountries(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
