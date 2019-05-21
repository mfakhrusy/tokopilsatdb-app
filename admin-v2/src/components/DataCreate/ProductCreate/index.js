import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  required,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const ProductCreate = (props) => (
  <Create title="Create a Product" {...props}>
    <SimpleForm>
      <ReferenceInput
        source="collection_id"
        reference="collection"
        validate={required()}
      >
        <SelectInput optionText="label" />
      </ReferenceInput>
      <TextInput source="product_name" />
      <TextInput source="price" />
      <TextInput source="product_description" />
      <ImageInput source="image">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default ProductCreate;
