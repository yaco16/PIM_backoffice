/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Country from 'src/containers/Country';

import AddItem from 'src/components/Modal';

import 'semantic-ui-css/semantic.min.css';
import 'src/styles/index.scss';

const List = ({ itemName }) => {
  // console.log('itemName de Countries:', itemName);
  return (
    <div className="category__container">
      <Link to={{ pathname: '/' }} className="category__nav">
        Retour accueil
      </Link>
      <div className="category__subContainer">
        <h1 className="category__title">Liste des XXX</h1>
        <AddItem itemName={itemName} />
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
