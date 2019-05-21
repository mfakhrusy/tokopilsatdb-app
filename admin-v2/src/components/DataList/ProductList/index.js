import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ImageField,
  NumberField,
} from 'react-admin';

const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      {/* <ReferenceField source="collection_id" reference="collections"><TextField source="id" /></ReferenceField> */}
      {/* <ReferenceField source="product_id" reference="products"><TextField source="id" /></ReferenceField> */}
      <TextField source="product_name" />
      <TextField source="product_description" />
      <NumberField source="price" />
      <TextField source="file_name" />
      <ImageField source="image_url" />
      <DateField source="creation_date" />
      {/* <TextField source="id" /> */}
    </Datagrid>
  </List>
);

export default ProductList;
