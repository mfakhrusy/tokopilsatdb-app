import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import styled from 'styled-components';

import './index.scss';

const Container = styled.button`
  width: ${({ dimension }) => `${dimension}px`};
  height: ${({ dimension }) => `${dimension}px`};

  > .bar {
    width: ${({ dimension }) => `${dimension}px`};
    background-color: ${({ color }) => color};
  }
`;

class CloseIcon extends Component {
  render() {
    const {
      rounded,
      withBorder,
      onClick,
      button,
      dimension,
      color,
    } = this.props;

    return (
      <Container
        dimension={dimension}
        color={color}
        className={`close-icon ${button ? 'button' : ''} ${rounded ? 'rounded' : ''} ${withBorder ? 'border' : ''}`}
        onClick={button ? onClick : noop}
      >
        <div className="bar" />
        <div className="bar" />
      </Container>
    );
  }
}

CloseIcon.propTypes = {
  rounded: PropTypes.bool,
  withBorder: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  button: PropTypes.bool,
  dimension: PropTypes.number,
  color: PropTypes.string,
};

CloseIcon.defaultProps = {
  rounded: false,
  withBorder: false,
  button: true,
  dimension: 40,
  color: 'grey',
};

export default CloseIcon;
