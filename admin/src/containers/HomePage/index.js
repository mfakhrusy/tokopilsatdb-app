import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import * as USER_ACT from 'actions/user';
import * as COLLECTION_ACT from 'actions/collection';

import NavigationPanel from 'containers/NavigationPanel';
import NavigationBar from 'containers/NavigationBar';

import './index.scss';
import Routes from './routes';

class HomePage extends Component {
  componentDidMount() {
    const {
      getUserDetail,
      history,
      getCollectionList,
    } = this.props;

    const userId = Cookies.get('user_id');
    const token = Cookies.get('token');

    if (!token) {
      history.push('/login');
    } else {
      getUserDetail(userId, token);
    }

    getCollectionList();
  }
  
  render() {
    return (
      <div className="homepage">
        <NavigationPanel />
        <main className="content">
          <NavigationBar />
          <Routes />
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  getUserDetail: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  getCollectionList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetail: (userId, token) => dispatch(USER_ACT.getUserDetail(userId, token)),
    getCollectionList: () => dispatch(COLLECTION_ACT.getCollectionList()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
