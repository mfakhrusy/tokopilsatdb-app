import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
} from 'react-admin';

const PostEdit = (props) => (
  <Edit title="title" {...props}>
    <SimpleForm>
      <TextInput source="label" />
      <ImageInput source="image">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default PostEdit;
