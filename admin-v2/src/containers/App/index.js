import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from 'utils/providers/dataProvider';
import CollectionList from 'components/DataList/CollectionList';
import CollectionShow from 'components/DataShow/CollectionShow';
import CollectionCreate from 'components/DataCreate/CollectionCreate';
import CollectionEdit from 'components/DataEdit/CollectionEdit';

export default class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="collection"
          list={CollectionList}
          show={CollectionShow}
          create={CollectionCreate}
          edit={CollectionEdit}
        />
      </Admin>
    );
  }
}
