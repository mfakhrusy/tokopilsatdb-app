import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

class Link extends Component {
  render() {
    const { active, children } = this.props;

    if (active) {
      return <RouterLink {...this.props}>{children}</RouterLink>;
    }
    return <span {...this.props}>{children}</span>;
  }
}

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  active: true,
};

export default Link;
