import PropTypes from 'prop-types';

export const companyDetailTypes = PropTypes.shape({
  company_id: PropTypes.string.isRequired,
  company_name: PropTypes.string.isRequired,
  company_url: PropTypes.string.isRequired,
  creation_date: PropTypes.string.isRequired,
  themeColor: PropTypes.shape({
    darken: PropTypes.string.isRequired,
  }).isRequired,
  theme_color: PropTypes.string.isRequired,
});
