import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ImageField,
  NumberField,
} from 'react-admin';

const CollectionShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="label" />
      <TextField source="file_name" />
      <ImageField source="image_url" />
      <NumberField source="items_count" />
      <DateField source="creation_date" />
    </SimpleShowLayout>
  </Show>
);

export default CollectionShow;
