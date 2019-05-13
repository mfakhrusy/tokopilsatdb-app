import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from 'utils/providers/dataProvider';
import CollectionList from 'components/DataList/CollectionList';

export default class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="collection" list={CollectionList} />
      </Admin>
    );
  }
}
