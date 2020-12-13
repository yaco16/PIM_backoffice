import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getItem, deleteItem } from '../../requests';

const Countries = ({ allCountries, getAllCountries }) => {
  useEffect(() => {
    getItem('countries', getAllCountries);
  }, []);

  return (
    <div>
      <h1>Liste des pays</h1>
      <ul>
        {allCountries.map((country) => (
          <li key={country.id}>
            {country.name}
            <button type="button">Modifier</button>
            <button
              type="button"
              onClick={() => deleteItem('countries', country.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button type="button">Ajouter un pays</button>
      </div>
    </div>
  );
};

Countries.propTypes = {
  allCountries: PropTypes.array.isRequired,
  getAllCountries: PropTypes.func.isRequired,
};

export default Countries;
