import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

class Searchbar extends Component {
  render() {
    const { navPanelIsExtended } = this.props;

    return (
      <div className={`searchbar ${navPanelIsExtended ? 'is-extended' : 'is-not-extended'}`}>
        {navPanelIsExtended ? (
          <form>
            <input type="text" placeholder="Search..." />
          </form>
        ) : null}
        <div className="search-icon">
          <FontAwesomeIcon icon="search" />
        </div>
      </div>
    );
  }
}

Searchbar.propTypes = {
  navPanelIsExtended: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
  };
};

export default connect(mapStateToProps)(Searchbar);
