import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './index.scss';

const Container = styled.div`
  width: ${({ dimension }) => `${dimension}px`};
  height: ${({ dimension }) => `${dimension}px`};
  border-radius: ${({ dimension }) => `${dimension / 2}px`};
  border-color: ${({ color, loading }) => `${color} ${color} ${loading ? 'transparent' : color} ${color}`};
`;

class Spinner extends Component {
  render() {
    const { dimension, color, loading } = this.props;

    return (
      <Container
        className={`spinner ${loading ? 'loading' : ''}`}
        loading={loading}
        dimension={dimension}
        color={color}
      />
    );
  }
}

Spinner.propTypes = {
  dimension: PropTypes.number,
  color: PropTypes.string,
  loading: PropTypes.bool,
};

Spinner.defaultProps = {
  dimension: 40, // in pixel
  color: '#000000',
  loading: true,
};

export default Spinner;
