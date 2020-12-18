import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'src/styles/index.scss';

import Home from 'src/components/Home';
// import Countries from 'src/containers/Countries';
// import Currencies from 'src/containers/Currencies';
// import Customers from 'src/components/Customers';
import Form from 'src/components/Form';
import List from 'src/components/List';

const Backoffice = () => (
  <div className="home__main">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/countries">
        <List />
      </Route>
      <Route exact path="/currencies">
        <List />
      </Route>
      <Route exact path="/customers">
        <List />
      </Route>
      <Route path="/form" render={(props) => <Form {...props} />} />
    </Switch>
  </div>
);

export default Backoffice;
