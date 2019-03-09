import React, { Component } from 'react';

import PanelListItem from 'components/PanelListItem';

import './index.scss';

class PanelList extends Component {
  render() {
    return (
      <div className="panel-list">
        <ul>
          <PanelListItem
            label="Dashboard"
            faIcon="home"
            to="/"
          />
          <PanelListItem
            label="Store"
            faIcon="store-alt"
            to="/store"
          />
          <PanelListItem
            label="Products"
            faIcon="dolly"
            to="/product"
            dropdown={[
              { label: 'New Product', to: '/add' },
            ]}
          />
          <PanelListItem
            label="Collection"
            faIcon="shopping-cart"
            to="/collection"
            dropdown={[
                { label: 'New Collection', to: '/add' },
              ]}
          />
        </ul>
      </div>
    );
  }
}

export default PanelList;
