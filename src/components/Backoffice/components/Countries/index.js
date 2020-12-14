import React from 'react';
import PropTypes from 'prop-types';
import Country from '../../containers/Country';
// import Button from '../Modal/button';
// import Modal from '../Modal/modal';
import AddCountry from '../SUI-Modal/addCountry';
import 'semantic-ui-css/semantic.min.css';

const Countries = ({ getAllCountries }) => {
  getAllCountries();
  return (
    <div>
      <h1>Liste des pays</h1>
      <ul>
        <Country />
      </ul>
      <div>
        {/* <button type="button">Ajouter un pays</button> */}
        {/* <Button /> */}
        {/* <Modal /> */}
        {/* <button class="ui button" onClick={() => addCountry()}>
          Basic Modal
        </button> */}
        <AddCountry />
      </div>
    </div>
  );
};

Countries.propTypes = {
  getAllCountries: PropTypes.func.isRequired,
};

export default Countries;
