/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

import AddItem from 'src/components/Modal';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const List = ({ category }) => {
  // useEffect(() => {
  //   console.log(itemName);
  // }, []);
  console.log('category', category);
  return (
    <div className="category__container">
      <Link to={{ pathname: '/' }} className="category__nav">
        Retour accueil
      </Link>
      <div className="category__subContainer">
        <h1 className="category__title">Liste des XXX</h1>
        <AddItem itemName={category} />
      </div>

      {/* <ul>
        <Country />
      </ul> */}
    </div>
  );
};

List.propTypes = {
  itemName: PropTypes.string.isRequired,
};

export default List;
