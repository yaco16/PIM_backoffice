import React from 'react';
import PropTypes from 'prop-types';
import Country from '../../containers/Country';

const Countries = ({ getAllCountries }) => {
  getAllCountries();
  return (
    <div>
      <h1>Liste des pays</h1>
      <ul>
        <Country />
      </ul>
      <div>
        <button type="button">Ajouter un pays</button>
      </div>
    </div>
  );
};

Countries.propTypes = {
  getAllCountries: PropTypes.func.isRequired,
};

export default Countries;
