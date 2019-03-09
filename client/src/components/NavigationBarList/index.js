import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './index.scss';

class NavigationBarList extends Component {
  onClickItem = () => {
    const { history, to } = this.props;

    history.push(to);
  }

  render() {
    const { label } = this.props;

    return (
      <li className="navigationbar-list">
        <button
          type="button"
          onClick={this.onClickItem}
          onKeyDown={this.onClickItem}
        >
          {label}
        </button>
      </li>
    );
  }
}

NavigationBarList.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(NavigationBarList);
