import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';

import { rootPath } from 'config/config';
import { authTypes } from 'utils/types/auth';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={rootPath} component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    );
  }
}

Routes.propTypes = {
  auth: authTypes.isRequired,
};

export default Routes;
