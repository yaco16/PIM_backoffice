import React from 'react';
import PropTypes from 'prop-types';

// import { fakeCountries } from 'src/components/Backoffice/fakeDatas';

const Country = ({ allCountries }) => (
  <div>{allCountries}</div>
);

Country.propTypes = {
  allCountries: PropTypes.func.isRequired,
};

export default Country;

