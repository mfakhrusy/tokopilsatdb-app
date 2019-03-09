import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import './index.scss';

class UserName extends Component {
  render() {
    const { userDetail } = this.props;
    return (
      <div className="user-name">
        <span>
          {`${get(userDetail, 'first_name', '')} ${get(userDetail, 'last_name', '')}`}
        </span>
      </div>
    );
  }
}

UserName.propTypes = {
  userDetail: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userDetail: state.userDetail,
  };
};

export default connect(mapStateToProps)(UserName);
