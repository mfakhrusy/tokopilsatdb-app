import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as COMPANY_ACT from 'actions/company';
import * as COLLECTION_ACT from 'actions/collection';
import { companyUrl } from 'config/config';

import Routes from 'containers/Wrapper/routes';
import MainHeader from 'components/MainHeader';

import './index.scss';

class Wrapper extends Component {
  componentDidMount() {
    const { getCompanyDetail, getCollectionList } = this.props;

    getCompanyDetail(companyUrl);
    getCollectionList();
  }

  render() {
    return (
      <div className="wrapper-page">
        <MainHeader />
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

Wrapper.propTypes = {
  getCompanyDetail: PropTypes.func.isRequired,
  getCollectionList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyDetail: (url) => dispatch(COMPANY_ACT.getCompanyDetail(url)),
    getCollectionList: () => dispatch(COLLECTION_ACT.getCollectionList()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Wrapper));
