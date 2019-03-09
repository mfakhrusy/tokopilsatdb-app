import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class InsertTextWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
    
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { onInsertText } = this.props;
    const { inputValue } = this.state;

    if (prevState.inputValue !== inputValue) {
      onInsertText(inputValue);
    }
  }
  
  handleChangeInput = (e) => {

    this.setState({ inputValue: e.target.value });
  }
  
  render() {
    const {
      classLabel,
      label,
      multiline,
    } = this.props;

    const {
      inputValue
    } = this.state;

    return (
      <div className={`insert-text-widget insert-${classLabel}`}>
        <form>
          <label>{label}</label>
          {
            multiline ? (
              <textarea onChange={this.handleChangeInput} value={inputValue} />
            ) : (
              <input type="text" onChange={this.handleChangeInput} value={inputValue} />
            )
          }
        </form>
      </div>
    );
  }
}

InsertTextWidget.propTypes = {
  classLabel: PropTypes.string,
  label: PropTypes.string,
  onInsertText: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
};

InsertTextWidget.defaultProps = {
  classLabel: 'text',
  label: 'Name',
  multiline: false,
};


export default InsertTextWidget;
