import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, noop } from 'lodash';
import {
  Popover,
  PopoverHeader,
} from 'reactstrap';

import './index.scss';

class InsertTextWidget extends Component {
  state = {
    inputValue: '',
  }

  componentDidUpdate(prevProps, prevState) {
    const { onInsertText } = this.props;
    const { inputValue } = this.state;

    if (prevState.inputValue !== inputValue) {
      onInsertText(inputValue);
    }
  }

  handleChangeInput = (e) => {
    const { value, onEdit, type } = this.props;

    if (value === false) {
      this.setState({ inputValue: e.target.value });
    } else {
      onEdit(type, e.target.value);
    }
  }

  render() {
    const {
      classLabel,
      label,
      multiline,
      popover,
      type,
      value,
    } = this.props;

    const {
      inputValue
    } = this.state;

    return (
      <div className={`insert-text-widget insert-${classLabel || type}`}>
        <form>
          <label>{label}</label>
          {
            multiline ? (
              <textarea
                onChange={this.handleChangeInput}
                value={value === false ? inputValue : value}
                id={`input_${type}`}
              />
            ) : (
              <input
                type="text"
                onChange={this.handleChangeInput}
                value={value === false ? inputValue : value}
                id={`input_${type}`}
              />
            )
          }
          {!isEmpty(popover) && (
            <Popover
              placement="right"
              isOpen={popover.show}
              style={{ color: 'red' }}
              target={`input_${type}`}
            >
              <PopoverHeader>{popover.text}</PopoverHeader>
            </Popover>
          )}
        </form>
      </div>
    );
  }
}

InsertTextWidget.propTypes = {
  classLabel: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])]),
  onInsertText: PropTypes.func,
  onEdit: PropTypes.func,
  multiline: PropTypes.bool,
  popover: PropTypes.shape({
    show: PropTypes.bool,
    text: PropTypes.string,
  }),
};

InsertTextWidget.defaultProps = {
  classLabel: 'text',
  label: 'Name',
  multiline: false,
  popoverText: '',
  popover: {},
  value: false,
  onEdit: noop,
  onInsertText: noop,
};

export default InsertTextWidget;
