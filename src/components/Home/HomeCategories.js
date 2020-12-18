/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'src/styles/index.scss';
import List from 'src/components/List';

const HomeCategories = ({ homeCategories }) => {
  console.log('homeCategories:', homeCategories);
  return (
    <div>
      <ul className="itemsList__container">
        {homeCategories.homeCategories.map((category) => (
          <a href={`/${category.name}`} key={category.id}>
            {category.name}
          </a>
        ))}
      </ul>
    </div>
  );
};

HomeCategories.propTypes = {
  homeCategories: PropTypes.object.isRequired,
};

export default HomeCategories;
