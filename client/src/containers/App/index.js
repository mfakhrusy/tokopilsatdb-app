import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from 'containers/Wrapper';
import FontAwesomeProvider from 'containers/FontAwesomeProvider';

import store from 'store';

import './index.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <FontAwesomeProvider>
            <Wrapper />
          </FontAwesomeProvider>
        </Provider>
      </BrowserRouter>
    );
  }
}

App.propTypes = {

};

export default App;
