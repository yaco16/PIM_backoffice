/* eslint-disable no-console */
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UpdateItem from 'src/containers/ItemUpdate';
import { getCurrencies } from 'src/selectors/requests';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const Currency = ({ currencies, toggleModal }) => {
  useEffect(() => {
    getCurrencies();
  }, []);
  const handleOnClick = (event) => {
    event.preventDefault();
    console.log('clic');
    toggleModal();
  };
  return (
    // <div>Dans Currency</div>
    // <div className="itemsList__container">
    //   {currencies.map((currency) => (
    //     <Link
    //       to={{
    //         pathname: '/form',
    //         state: currency,
    //       }}
    //       key={currency.id}
    //     >
    //       {currency.name}
    //     </Link>
    //   ))}
    // </div>
    <div className="itemsList__container">
      {currencies.map((currency) => (
        <a
          href="/"
          key={currency.id}
          onClick={handleOnClick}
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
};

export default Currency;
