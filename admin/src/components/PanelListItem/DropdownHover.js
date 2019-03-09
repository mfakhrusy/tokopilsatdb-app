import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

class DropdownHover extends Component {
  render() {
    const{
      navPanelIsExtended,
      dropdown,
      handleClickPanelItem,
      label,
    } = this.props;

    if (!navPanelIsExtended && !isEmpty(dropdown)) {
      return (
        <div className="dropdown-hover">
          {dropdown.map((item) => <button key={`key-${label}-${item.label}`} data-route={item.to} onClick={handleClickPanelItem}>{item.label}</button>)}
        </div>
      );
    }

    return null;
  }
}

DropdownHover.propTypes = {
  dropdown: PropTypes.array.isRequired,
  navPanelIsExtended: PropTypes.bool.isRequired,
  handleClickPanelItem: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
  };
};

export default connect(mapStateToProps)(DropdownHover);
