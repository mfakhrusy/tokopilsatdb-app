import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';

import { rootPath } from 'config/config';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={rootPath} component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    );
  }
}

export default Routes;
