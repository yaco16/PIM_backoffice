/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import capitalize from 'src/selectors/functions';
import 'src/styles/index.scss';

const HomeCategories = ({ homeCategories }) => (
  <div>
    <ul className="itemsList__container">
      {homeCategories.homeCategories.map((category) => (
        <Link
          to={{
            pathname: `/${category.name}`,
            state: true,
          }}
          key={category.id}
        >
          {capitalize(category.nameFr)}
        </Link>
      ))}
    </ul>
  </div>
);

HomeCategories.propTypes = {
  homeCategories: PropTypes.object.isRequired,
};

export default HomeCategories;
