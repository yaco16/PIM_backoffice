/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import { capitalize } from 'src/selectors/functions';
import 'src/styles/index.scss';

const HomeCategories = ({ homeCategories }) => {
  console.log('homeCategories:', homeCategories);
  return (
    <div>
      <ul className="itemsList__container">
        {homeCategories.homeCategories.map((category) => (
          <a href={`/${category.name}`} key={category.id}>
            {capitalize(category.nameFr)}
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
