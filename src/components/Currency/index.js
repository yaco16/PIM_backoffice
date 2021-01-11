/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCurrencies } from 'src/requests';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const Currency = ({ currencies }) => {
  useEffect(() => {
    getCurrencies();
  }, []);
  return (
    // <div>Dans Currency</div>
    <div className="itemsList__container">
      {currencies.map((currency) => (
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
  currencies: PropTypes.array.isRequired,
};

export default Currency;
