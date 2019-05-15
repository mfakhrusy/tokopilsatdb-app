import React from 'react';
import {
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput,
} from 'react-admin';

const PostEdit = (props) => (
  <Edit title="title" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="teaser" options={{ multiLine: true }} />
      <LongTextInput source="body" />
      <DateInput label="Publication date" source="published_at" />
      <TextInput source="average_note" />
      <DisabledInput label="Nb views" source="views" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
