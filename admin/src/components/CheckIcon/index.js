import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './index.scss';

const Container = styled.div`
  height: ${({ dimension }) => `${dimension}px`};
  width: ${({ dimension }) => `${dimension / 2}px`};

  > .bar {
    background-color: ${({ color }) => color};
  }

  > .bar-vertical {
    width: ${({ dimension }) => `${dimension}px`};
  }

  > .bar-horizontal {
    width: ${({ dimension }) => `${dimension / 2}px`};
  }
`;

class CheckIcon extends Component {
  render() {
    const { dimension, color } = this.props;

    return (
      <Container
        dimension={dimension}
        color={color}
        className="check-icon"
      >
        <div className="bar bar-vertical" />
        <div className="bar bar-horizontal" />
      </Container>
    );
  }
}

CheckIcon.propTypes = {
  dimension: PropTypes.number,
  color: PropTypes.string,
};

CheckIcon.defaultProps = {
  dimension: 40,
  color: 'grey',
};

export default CheckIcon;
