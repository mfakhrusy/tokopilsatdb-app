import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from 'containers/Wrapper';

import store from 'store';

import './index.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Wrapper />
        </Provider>
      </BrowserRouter>
    );
  }
}

App.propTypes = {

};

export default App;
