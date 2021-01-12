/* eslint-disable no-console */
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UpdateItem from 'src/containers/ItemUpdate';
import { getCurrencies } from 'src/selectors/requests';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const Currency = ({ currencies, toggleModal, loadItem }) => {
  useEffect(() => {
    getCurrencies();
  }, []);
  return (
    <div className="itemsList__container">
      {currencies.map((currency) => (
        <a
          href="/"
          key={currency.id}
          onClick={(event) => {
            event.preventDefault();
            console.log(currency);
            loadItem(currency);
            toggleModal();
          }}
        >
          {currency.name}
        </a>
      ))}
      <UpdateItem />
    </div>
  );
};

Currency.propTypes = {
  currencies: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  loadItem: PropTypes.func.isRequired,
};

export default Currency;
