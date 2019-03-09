import React, { Component } from 'react';

import HomeContent from 'components/HomeContent';
import CallToAction from 'components/CallToAction';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HomeContent />
        <CallToAction />
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;
