/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'src/styles/index.scss';

const HomeCategories = ({ homeCategories }) => {
  console.log('homeCategories:', homeCategories);
  return (
    <div>
      <ul className="itemsList__container">
        {homeCategories.homeCategories.map((category) => (
          <Link
            to={{
              pathname: `/${category.name}`,
              state: category,
            }}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

HomeCategories.propTypes = {
  homeCategories: PropTypes.object.isRequired,
};

export default HomeCategories;
