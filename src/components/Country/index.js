/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';

const Country = ({ allCountries }) => {
  console.log('allCountries:', allCountries);
  console.log('je suis dans Country');
  return (
    <div className="country__container">
      {allCountries.map((country) => (
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
  allCountries: PropTypes.array.isRequired,
};

export default Country;
