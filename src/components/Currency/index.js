/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const Currency = ({ currencies, getAllCurrencies }) => {
  console.log('currencies:', currencies.currencies);
  useEffect(() => {
    console.log('je suis dans useEffect');
    getAllCurrencies();
  }, []);
  console.log('je suis dans Currency');
  return (
    <div className="itemsList__container">
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
    </div>
  );
};

Currency.propTypes = {
  currencies: PropTypes.object.isRequired,
  getAllCurrencies: PropTypes.func.isRequired,
};

export default Currency;
