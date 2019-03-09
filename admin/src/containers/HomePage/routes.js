import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Dashboard from 'containers/Dashboard';
import Collections from 'containers/Collections';
import InsertCollection from 'containers/InsertCollection';
import InsertProduct from 'containers/InsertProduct';

class Routes extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.path}/`} component={Dashboard} />
        <Route exact path={`${match.path}/collection/add`} component={InsertCollection} />
        <Route exact path={`${match.path}/collection/:collection_id`} component={Collections} />
        <Route exact path={`${match.path}/collection`} component={Collections} />
        <Route exact path={`${match.path}/product/add`} component={InsertProduct} />
      </Switch>
    );
  }
}

Routes.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Routes);
