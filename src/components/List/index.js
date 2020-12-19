/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import AddItem from 'src/containers/AddItem';
import MyComponent from 'src/selectors/MyComponent';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const List = ({ category }) => {
  console.log('category', category);

  return (
    <div className="category__container">
      <Link to={{ pathname: '/' }} className="category__nav">
        Retour accueil
      </Link>
      <div className="category__subContainer">
        <h1 className="category__title">Liste des {category[0].nameFr}</h1>
        <AddItem item={category[0]} />
      </div>

      <ul>
        <MyComponent tag={String(category[0].nameSingular)} />
      </ul>
    </div>
  );
};

List.propTypes = {
  category: PropTypes.array.isRequired,
};

export default List;
