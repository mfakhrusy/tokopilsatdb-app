import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { get } from 'lodash';

import PanelList from 'components/PanelList';
import UserWidget from 'components/UserWidget';
import Delimiter from 'components/Delimiter';

import './index.scss';

const Header = styled.div`
  background-color: ${props => props.color};
`;

class NavigationPanel extends Component {
  render() {
    const {
      companyDetail,
      isExtended,
    } = this.props;
  
    return (
      <div className={`navigation-panel ${isExtended ? 'extended' : 'not-extended'}`}>
        <Header
          className="header"
          color={get(companyDetail, 'themeColor.darken', companyDetail.theme_color)}
        >
          <h2>
            {isExtended ? get(companyDetail, 'company_name', '') : get(companyDetail, 'company_name', '').charAt(0)}
          </h2>
        </Header>
        <UserWidget />
        <Delimiter text="Main Navigation" />
        <PanelList />
      </div>
    );
  }
}

NavigationPanel.propTypes = {
  companyDetail: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isExtended: state.ui.navigationPanel.isExtended,
    companyDetail: state.companyDetail,
  };
};

export default withRouter(connect(mapStateToProps)(NavigationPanel));
