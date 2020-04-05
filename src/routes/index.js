import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}