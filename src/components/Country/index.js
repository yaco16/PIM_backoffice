/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCountries } from 'src/requests';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const Country = ({ countries }) => {
  useEffect(() => {
    // console.log('je suis dans useEffect de Country');
    getCountries();
  }, []);
  return (
    // <div>Dans Country</div>
    <div className="itemsList__container">
      {countries.map((country) => (
        <Link
          to={{
            pathname: '/form',
            state: country,
          }}
          key={country.id}
        >
          {country.name}
        </Link>
      ))}
    </div>
  );
};

Country.propTypes = {
  countries: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  countries: state.countries.list,
});

export default connect(mapStateToProps)(Country);
