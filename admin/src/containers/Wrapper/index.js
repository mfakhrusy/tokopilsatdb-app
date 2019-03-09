import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as COMPANY_ACT from 'actions/company';
import * as AUTH_ACT from 'actions/auth';

import { companyUrl, rootPath } from 'config/config';
import { authTypes } from 'utils/typings';

import Routes from './routes';

import './index.scss';

class Wrapper extends Component {
  componentDidMount() {
    const {
      getCompanyDetail,
      checkAuth,
      history,
      location,
    } = this.props;

    checkAuth();
    getCompanyDetail(companyUrl);
    if (location.pathname === '/') {
      history.push(rootPath);
    }
  }

  render() {
    const { auth } = this.props;

    return (
      <div className="wrapper">
        <Routes auth={auth} />
      </div>
    );
  }
}

Wrapper.propTypes = {
  auth: authTypes.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyDetail: (companyUrl) => dispatch(COMPANY_ACT.getCompanyDetail(companyUrl)),
    checkAuth: () => dispatch(AUTH_ACT.checkAuth())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));
