import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as UI_ACT from 'actions/ui';

import './index.scss';

const Container = styled.div`
  background-color: ${(props) => props.color};
`;

const BurgerContainer = styled.div`
  &:hover {
    /* color: ${(props) => props.color}; */
    background-color: ${(props) => props.bgColor};
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    
    this.hideNavigationPanel = this.hideNavigationPanel.bind(this);
  }

  hideNavigationPanel() {
    const {
      toggleExtendNavigationPanel,
      navPanelIsExtended,
    } = this.props;

    toggleExtendNavigationPanel(!navPanelIsExtended);
  }
  
  render() {
    const { companyDetail } = this.props;

    return (
      <Container
        className="navigation-bar"
        color={companyDetail.theme_color}
      >
        <BurgerContainer
          className="burger-container"
          // color={companyDetail.theme_color}
          bgColor={get(companyDetail, 'themeColor.darken', companyDetail.theme_color)}
          onClick={this.hideNavigationPanel}
        >
          <FontAwesomeIcon icon="bars" />
        </BurgerContainer>
        <div className="placeholder" />
        <div>

        </div>
        <div></div>
        <div></div>
      </Container>
    );
  }
}

NavigationBar.propTypes = {
  companyDetail: PropTypes.object.isRequired,
  toggleExtendNavigationPanel: PropTypes.func.isRequired,
  navPanelIsExtended: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
    companyDetail: state.companyDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleExtendNavigationPanel: (userId, token) => dispatch(UI_ACT.toggleExtendNavigationPanel(userId, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
