import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import 'src/styles/index.scss';

import Home from 'src/components/Home';
// import Countries from 'src/containers/Countries';
// import Currencies from 'src/containers/Currencies';
// import Customers from 'src/components/Customers';
import Form from 'src/components/Form';
import List from 'src/components/List';

const Backoffice = ({ homeCategories }) => (
  <div className="home__main">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {homeCategories.homeCategories.map((category) => (
        <Route exact path={`/${category.name}`} key={category.id}>
          <List category={[category]} />
        </Route>
      ))}
      <Route path="/form" render={(props) => <Form {...props} />} />
    </Switch>
  </div>
);

Backoffice.propTypes = {
  homeCategories: PropTypes.object.isRequired,
};

export default Backoffice;
