import PropTypes from 'prop-types';

export const collectionListTypes = PropTypes.shape({
  collection_id: PropTypes.string.isRequired,
  creation_date: PropTypes.string.isRequired,
  file_name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  items_count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
});
