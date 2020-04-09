import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/details/:id" component={Details} />
    </Switch>
  );
}
