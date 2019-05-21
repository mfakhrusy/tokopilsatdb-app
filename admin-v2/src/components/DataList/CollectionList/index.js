import React from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
  ImageField,
} from 'react-admin';

const CollectionList = (props) => (
  <List {...props} title="Store Collection">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="label" />
      {/* <TextField source="file_name" /> */}
      <ImageField source="image_url" />
      <NumberField source="items_count" />
      <DateField source="creation_date" />
    </Datagrid>
  </List>
);

export default CollectionList;
