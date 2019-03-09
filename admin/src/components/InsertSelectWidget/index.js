import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './index.scss';

class InsertSelectWidget extends Component {
  render() {
    const {
      label,
      options,
      onSelect,
    } = this.props;

    return (
      <div className="insert-select-widget">
        <div className="label">
          {label}
        </div>
        <div className="select">
          <Select
            options={options}
            onChange={onSelect}
          />
        </div>
      </div>
    );
  }
}

InsertSelectWidget.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

InsertSelectWidget.defaultProps = {
  label: 'Select Options',
};

export default InsertSelectWidget;
