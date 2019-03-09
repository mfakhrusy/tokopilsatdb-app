import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

class Delimiter extends Component {
  render() {
    const {
      text,
      navPanelIsExtended,
    } = this.props;

    return (
      <div className="delimiter">
        {navPanelIsExtended ? text : ''}
      </div>
    );
  }
}

Delimiter.propTypes = {
  text: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
  };
};

export default connect(mapStateToProps)(Delimiter);
