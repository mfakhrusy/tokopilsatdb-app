import PropTypes from 'prop-types';

export const authTypes = PropTypes.shape({
  message: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  status: PropTypes.number.isRequired,
});

