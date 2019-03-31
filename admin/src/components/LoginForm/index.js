import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import './index.scss';

class LoginForm extends Component {
  render() {
    const {
      username,
      password,
      onChangeUsername,
      onChangePassword,
      onSubmitLogin,
      companyDetail,
    } = this.props;

    return (
      <form onSubmit={onSubmitLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={onChangeUsername}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        <Button
          type="submit"
          color={companyDetail.theme_color}
          style={{
            backgroundColor: `${companyDetail.theme_color}`
          }}
        >
          Log In
        </Button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmitLogin: PropTypes.func.isRequired,
  companyDetail: PropTypes.object.isRequired,
};

export default LoginForm;
