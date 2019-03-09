import PropTypes from 'prop-types';

export const authTypes = PropTypes.shape({
  message: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  status: PropTypes.number,
});

export const formDataTypes = PropTypes.shape({
  label: PropTypes.string.isRequired,
  media: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  success: PropTypes.oneOf(['', false, true]).isRequired,
});
