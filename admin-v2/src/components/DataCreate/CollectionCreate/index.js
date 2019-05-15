import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from 'react-admin';

const CollectionCreate = (props) => (
  <Create title="Create a Collection" {...props}>
    <SimpleForm>
      <TextInput source="label" />
      <ImageInput source="image">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default CollectionCreate;
