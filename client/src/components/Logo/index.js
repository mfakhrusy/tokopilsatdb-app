import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';

import './index.scss';

class Logo extends Component {
  render() {
    const { companyDetail } = this.props;
    const companyName = get(companyDetail, 'company_name', '');
    return (
      <div className="logo-container">
        {companyName.charAt(0)}
      </div>
    );
  }
}

Logo.propTypes = {
  companyDetail: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    companyDetail: state.companyDetail,
  };
};

export default connect(mapStateToProps)(Logo);
