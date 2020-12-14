import React from 'react';
import PropTypes from 'prop-types';
import ModalExampleShorthand from '../SUI-Modal/addCountry';
import 'semantic-ui-css/semantic.min.css';
// import Form from '../Form';

import ButtonExampleConditionalsCustom from './button-SUI';
// import { deleteCountry } from '../../requests';

const Country = ({ allCountries }) => (
  <div>
    {allCountries.map((country) => (
      <li key={country.id} onClick={() => <ModalExampleShorthand />}>
        {country.name}
        {/* <button type="button" onClick={() => console.log('clic')}>
          Modifier
        </button> */}

        {/* <button
          type="button"
          onClick={() => deleteCountry(country.id)}
        >
          Supprimer
        </button> */}
      </li>
    ))}
  </div>
);

Country.propTypes = {
  allCountries: PropTypes.array.isRequired,
};

export default Country;
