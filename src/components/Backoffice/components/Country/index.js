import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';

const Country = ({ allCountries }) => {
  console.log('je suis dans Country');
  return (
    <div className="country__container">
      {allCountries.map((country) => (
        <Link
          to={{
            pathname: '/form',
            state: {
              id: country.id,
              cname: country.name,
              phone_prefix: country.phone_prefix,
              iso_code: country.iso_code,
              zone_id: country.zone_id,
              currency_id: country.currency_id,
            },
          }}
          key={country.id}
        >
          {country.name}
          {/* <button type="button" onClick={() => handleClick()}>
            Modifier
          </button> */}

          {/* <button
          type="button"
          onClick={() => deleteCountry(country.id)}
        >
          Supprimer
        </button>} */}
        </Link>
      ))}
    </div>
  );
};

Country.propTypes = {
  allCountries: PropTypes.array.isRequired,
};

export default Country;
