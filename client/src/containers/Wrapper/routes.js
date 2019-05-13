import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import CollectionPage from 'containers/CollectionPage';
import CollectionDetailPage from 'containers/CollectionDetailPage';
// import ContactPage from 'containers/ContactPage';

import { rootPath } from 'config/config';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={rootPath === '' ? '/' : rootPath} component={HomePage} />
        <Route exact path={`${rootPath}/collection`} component={CollectionPage} />
        <Route path={`${rootPath}/collection/:collectionId`} component={CollectionDetailPage} />
      </Switch>
    );
  }
}

Routes.propTypes = {
  
};

export default Routes;
