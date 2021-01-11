/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCountries } from 'src/selectors/requests';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const Country = ({ countries }) => {
  useEffect(() => {
    getCountries();
  }, []);
  return (
    // <div>Dans Country</div>
    <div className="itemsList__container">
      {countries.map((country) => (
        <Link
          to={{
            pathname: '/form',
            state: country,
          }}
          key={country.id}
        >
          {country.name}
        </Link>
      ))}
    </div>
  );
};

Country.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default Country;
