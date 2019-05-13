import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get, isEmpty } from 'lodash';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { rootPath } from 'config/config';
import * as UI_ACT from 'actions/ui';

import Dropdown from './Dropdown';
import DropdownHover from './DropdownHover';

import './index.scss';

class PanelListItem extends Component {
  constructor(props) {
    super(props);
    
    this.handleClickPanelItem = this.handleClickPanelItem.bind(this);
  }

  componentDidMount() {
    const {
      location,
      changeLocationNavigationPanel,
    } = this.props;

    changeLocationNavigationPanel(location.pathname);
  }

  handleClickPanelItem(e) {
    const {
      history,
      match,
      to,
      changeLocationNavigationPanel,
    } = this.props;

    const dropdownRoute = get(e, 'target.dataset.route', undefined);
    const targetRoute = !isEmpty(dropdownRoute) ? `${match.path}${to}${dropdownRoute}` : `${match.path}${to}`;

    changeLocationNavigationPanel(targetRoute);
    history.push(targetRoute);
  }
  
  render() {
    const {
      faIcon,
      label,
      dropdown,
      to,
      navPanelIsExtended,
      navPanelLocation,
    } = this.props;

    let isParentActive = false;
    if (isEmpty(dropdown)) {
      isParentActive = navPanelLocation.substring(rootPath.length) === to;
    } else {
      isParentActive = navPanelLocation.substring(rootPath.length, rootPath.length + to.length) === to;
    }

    return (
      <li className={`panel-list-item ${isParentActive ? 'active' : ''}`}>
        <button
          className="main-link"
          onClick={this.handleClickPanelItem}
        >
          <FontAwesomeIcon icon={faIcon} />
          {navPanelIsExtended ? <span className="label">{label}</span> : null}
          {dropdown && navPanelIsExtended ? <FontAwesomeIcon icon="angle-left" /> : null}
        </button>
        <Dropdown
          label={label}
          handleClickPanelItem={this.handleClickPanelItem}
          dropdown={dropdown}
          isParentActive={isParentActive}
        />
        <DropdownHover
          label={label}
          dropdown={dropdown}
          handleClickPanelItem={this.handleClickPanelItem}
          isParentActive={isParentActive}
        />
      </li>
    );
  }
}

PanelListItem.propTypes = {
  label: PropTypes.string.isRequired,
  faIcon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  dropdown: PropTypes.array,
  navPanelIsExtended: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  changeLocationNavigationPanel: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  navPanelLocation: PropTypes.string.isRequired,
};

PanelListItem.defaultProps = {
  dropdown: [],
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
    navPanelLocation: state.ui.navigationPanel.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocationNavigationPanel: (location) => dispatch(UI_ACT.changeLocationNavigationPanel(location))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PanelListItem));
