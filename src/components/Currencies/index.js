/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCountry from 'src/components/Modal';
import 'semantic-ui-css/semantic.min.css';
// import Loader from 'src/components/Loader';

const Currencies = ({ currencies, getAllCurrencies }) => {
  useEffect(() => {
    console.log('je suis dans useEffect');
    getAllCurrencies();
  }, []);
  console.log('allCurrencies:', currencies);
  // console.log(typeof currencies);
  return (
    <div className="currencies__container">
      <Link to={{ pathname: '/' }} className="currencies__nav">
        Retour accueil
      </Link>
      <div className="currencies__subContainer">
        <h1 className="currencies__title">Liste des devises</h1>
        <AddCountry className="currencies__addCurrencyButton" />
      </div>

      {/* <ul>
        {currencies.currencies.map((currency) => (
          <Link
            to={{
              pathname: '/form',
              state: currency,
            }}
            key={currency.id}
          >
            {currency.name}
          </Link>
        ))}
      </ul> */}
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
  getAllCurrencies: PropTypes.func.isRequired,
};

export default Currencies;
