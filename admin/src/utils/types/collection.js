import PropTypes from 'prop-types';

export const formCollectionTypes = PropTypes.shape({
  label: PropTypes.string.isRequired,
  media: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  success: PropTypes.oneOf(['', false, true]).isRequired,
});

export const collectionListTypes = PropTypes.shape({
  collection_id: PropTypes.string.isRequired,
  creation_date: PropTypes.string.isRequired,
  file_name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  items_count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
});

