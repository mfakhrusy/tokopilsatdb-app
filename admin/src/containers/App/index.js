import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store/index';

import Wrapper from 'containers/Wrapper';
import FontAwesomeProvider from 'containers/FontAwesomeProvider';

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

export default App;
