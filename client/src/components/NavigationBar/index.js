import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import NavigationBarList from 'components/NavigationBarList';
import './index.scss';

const navbarContent = [
  { type: 'home', label: 'Home', route: '/' },
  // { type: 'collection', label: 'Collection', route: '/collection' },
  { type: 'products', label: 'Products', route: '/product' },
  { type: 'about', label: 'About', route: '/' },
  { type: 'contact', label: 'Contact', route: '/' },
];

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigationbar">
        <ul>
          {
            navbarContent.map((item) => (
              <NavigationBarList
                key={item.type}
                label={item.label}
                to={item.route}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

NavigationBar.propTypes = {

};

export default NavigationBar;
