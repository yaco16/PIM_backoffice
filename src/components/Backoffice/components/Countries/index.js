import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Country from '../../containers/Country';
// import Button from '../Modal/button';
// import Modal from '../Modal/modal';
import AddCountry from '../SUI-Modal/addCountry';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';

const Countries = ({ getAllCountries }) => {
  getAllCountries();
  return (
    <div className="countries__container">
      <Link to={{ pathname: '/' }} className="countries__nav">
        Retour accueil
      </Link>
      <div className="countries__subContainer">
        <h1 className="countries__title">Liste des pays</h1>
        <AddCountry className="countries__addCountryButton" />
      </div>

      <ul>
        <Country />
      </ul>
      <div className="countries__submitButton">
        {/* <button type="button">Ajouter un pays</button> */}
        {/* <Button /> */}
        {/* <Modal /> */}
        {/* <button class="ui button" onClick={() => addCountry()}>
          Basic Modal
        </button> */}
      </div>
    </div>
  );
};

Countries.propTypes = {
  getAllCountries: PropTypes.func.isRequired,
};

export default Countries;
