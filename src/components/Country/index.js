/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const Country = ({ countries, getAllCountries }) => {
  console.log('countries:', countries.countries);
  useEffect(() => {
    console.log('je suis dans useEffect');
    getAllCountries();
  }, []);
  console.log('je suis dans Country');
  // return (
  //   <div>coucou</div>
  // );
  return (
    <div className="itemsList__container">
      {countries.countries.map((country) => (
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
  countries: PropTypes.object.isRequired,
  getAllCountries: PropTypes.func.isRequired,
};

export default Country;
