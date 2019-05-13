import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <button
          type="submit"
          // color={companyDetail.theme_color}
          style={{
            backgroundColor: `${companyDetail.theme_color}`,
          }}
        >
          Log In
        </button>
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
