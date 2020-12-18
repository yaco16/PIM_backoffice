/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddItem from 'src/components/Modal';
import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';
// import Loader from 'src/components/Loader';

const Currencies = ({ currencies, getAllCurrencies, itemName }) => {
  console.log('itemName:', itemName);
  useEffect(() => {
    console.log('je suis dans useEffect');
    getAllCurrencies();
  }, []);
  return (
    <div className="category__container">
      <Link to={{ pathname: '/' }} className="category__nav">
        Retour accueil
      </Link>
      <div className="category__subContainer">
        <h1 className="category__title">Liste des devises</h1>
        <AddItem itemName={itemName} />
      </div>
      {currencies.currencies.length > 0 && (
        <ul className="itemsList__container">
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
        </ul>
      )}
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.object.isRequired,
  getAllCurrencies: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default Currencies;
