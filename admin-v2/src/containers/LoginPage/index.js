import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { HTTP_STATUS_OK } from 'utils/constants';
import { companyDetailTypes } from 'utils/types/company';
import { authTypes } from 'utils/types/auth';

import LoginForm from 'components/LoginForm';

import * as AUTH_ACT from 'actions/auth';

import './index.scss';
import { rootPath } from 'config/config';

const Container = styled.div`
  background-color: ${(props) => props.color};
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    const { auth, history } = this.props;

    if (auth.isAuthenticated) {
      history.push(rootPath);
    }
  }

  componentDidUpdate(prevProps) {
    const { auth, history } = this.props;

    if (prevProps.auth.isAuthenticated !== auth.isAuthenticated) {
      if (auth.isAuthenticated) {
        history.push(rootPath);
      }
    }
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  onSubmitLogin = (e) => {
    const { login, history } = this.props;
    const { username, password } = this.state;

    e.preventDefault();

    login(username, password);
    history.push(rootPath);
  }

  render() {
    const { companyDetail, auth } = this.props;
    const { username, password } = this.state;

    return (
      <div className="login-page">
        <Container className="login-container" color={companyDetail.theme_color}>
          <header>
            <h2>{companyDetail.company_name}</h2>
          </header>
          <main>
            <LoginForm
              username={username}
              password={password}
              onSubmitLogin={this.onSubmitLogin}
              onChangePassword={this.onChangePassword}
              onChangeUsername={this.onChangeUsername}
              companyDetail={companyDetail}
            />
            <div className="alert-container">
              {
                auth.status === HTTP_STATUS_OK
                  ? null
                  : (
                    <div color="danger">
                      {auth.message}
                    </div>
                  )
              }
            </div>
          </main>
        </Container>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  companyDetail: companyDetailTypes.isRequired,
  history: PropTypes.object.isRequired,
  auth: authTypes.isRequired,
};

const mapStateToProps = (state) => {
  return {
    companyDetail: state.companyDetail,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(AUTH_ACT.login(username, password))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
