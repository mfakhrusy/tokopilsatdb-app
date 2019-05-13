import PropTypes from 'prop-types';

export const formProductTypes = PropTypes.shape({
  collectionId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  media: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  success: PropTypes.oneOf(['', false, true]).isRequired,
});
