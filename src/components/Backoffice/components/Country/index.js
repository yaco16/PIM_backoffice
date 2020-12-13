import React from 'react';
import PropTypes from 'prop-types';
import { deleteCountry } from '../../requests';

const Country = ({ allCountries }) => (
  <div>
    {allCountries.map((country) => (
      <li key={country.id}>
        {country.name}
        <button type="button">Modifier</button>
        <button
          type="button"
          onClick={() => deleteCountry(country.id)}
        >
          Supprimer
        </button>
      </li>
    ))}
  </div>
);

Country.propTypes = {
  allCountries: PropTypes.array.isRequired,
};

export default Country;
