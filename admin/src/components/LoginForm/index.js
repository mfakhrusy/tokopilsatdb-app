import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const ThemedButton = styled(Button)`
  background-color: ${props => props.color};
`;

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
      <form onSubmit={onSubmitLogin}>
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
        <ThemedButton
          type="submit"
          color={companyDetail.theme_color}
        >
          Log In
        </ThemedButton>
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
