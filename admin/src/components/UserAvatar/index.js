import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'avataaars';
import { connect } from 'react-redux';
import { get } from 'lodash';

class UserAvatar extends Component {
  render() {
    const { userDetail, dimension } = this.props;

    return (
      <div>
        {get(userDetail, 'avatar_url', '') ?
          (
            <img
              style={{ width: `${dimension}px`, height: `${dimension}px` }}
              src={get(userDetail, 'avatar_url', '')}
              alt="avatar"
            />
          ) :
          (
            <Avatar
              style={{ width: `${dimension}px`, height: `${dimension}px` }}
              avatarStyle='Circle'
              topType='ShortHairShortFlat'
              accessoriesType='Kurt'
              hairColor='Black'
              facialHairType='BeardMedium'
              facialHairColor='Black'
              clotheType='BlazerShirt'
              eyeType='Close'
              eyebrowType='Default'
              mouthType='Smile'
              skinColor='Light'
            />
          )
        }
      </div>
    );
  }
}

UserAvatar.propTypes = {
  userDetail: PropTypes.object.isRequired,
  dimension: PropTypes.number,
};

UserAvatar.defaultProps = {
  dimension: 100,
};

const mapStateToProps = (state) => {
  return {
    navPanelIsExtended: state.ui.navigationPanel.isExtended,
    userDetail: state.userDetail,
  };
};

export default connect(mapStateToProps)(UserAvatar);
