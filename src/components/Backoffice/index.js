import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'src/styles/index.scss';

import Home from './components/Home';
import Countries from './containers/Countries';
import Currencies from './components/Currencies';
import Customers from './components/Customers';
import Form from './components/Form';

const Backoffice = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/countries">
        <Countries />
      </Route>
      <Route exact path="/currencies">
        <Currencies />
      </Route>
      <Route exact path="/customers">
        <Customers />
      </Route>
      <Route path="/form" render={(props) => <Form {...props} />} />
    </Switch>
  </div>
);

export default Backoffice;
