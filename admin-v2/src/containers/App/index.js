import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from 'utils/providers/dataProvider';
import CollectionList from 'components/DataList/CollectionList';
import CollectionShow from 'components/DataShow/CollectionShow';
import CollectionCreate from 'components/DataCreate/CollectionCreate';
import CollectionEdit from 'components/DataEdit/CollectionEdit';
import ProductCreate from 'components/DataCreate/ProductCreate';
import ProductList from 'components/DataList/ProductList';

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
        <Resource
          name="product"
          list={ProductList}
          create={ProductCreate}
        />
      </Admin>
    );
  }
}
