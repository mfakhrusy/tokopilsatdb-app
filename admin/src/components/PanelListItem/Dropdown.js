import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

class Dropdown extends Component {
  render() {
    const{
      navPanelIsExtended,
      dropdown,
      label,
      handleClickPanelItem,
      isParentActive,
      navPanelLocation,
    } = this.props;

    if (navPanelIsExtended && !isEmpty(dropdown)) {
      return (
        <Fragment>
          {dropdown.map((item) => (
            <button
              className={`dropdown-link ${isParentActive && navPanelLocation.substring(navPanelLocation.length - item.to.length) === item.to ? 'active' : ''}`}
              onClick={handleClickPanelItem}
              key={`key-${label}-${item.label}`}
              data-route={item.to}
            >
              {item.label}
            </button>
          ))}
        </Fragment>
      );
    }

    return null;
  }
}

Dropdown.propTypes = {
  dropdown: PropTypes.array.isRequired,
  navPanelIsExtended: PropTypes.bool.isRequired,
  isParentActive: PropTypes.bool.isRequired,
  navPanelLocation: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClickPanelItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
    navPanelLocation: state.ui.navigationPanel.location,
  };
};

export default connect(mapStateToProps)(Dropdown);
