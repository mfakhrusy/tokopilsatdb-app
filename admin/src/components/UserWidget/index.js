import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserAvatar from 'components/UserAvatar';
import UserName from 'components/UserName';
import Searchbar from 'components/Searchbar';

import './index.scss';

class UserWidget extends Component {
  render() {
    const {
      navPanelIsExtended,
    } = this.props;

    return (
      <div className={`user-widget ${navPanelIsExtended ? 'is-extended' : 'is-not-extended'}`}>
        <div className="user-info">
          <UserAvatar dimension={45} />
          {navPanelIsExtended ? <UserName /> : null}
        </div>
        <Searchbar />
      </div>
    );
  }
}

UserWidget.propTypes = {
  navPanelIsExtended: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
  };
};

export default connect(mapStateToProps)(UserWidget);
