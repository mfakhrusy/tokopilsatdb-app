const publicDir = 'public';
const SITE_URL = process.env.NODE_ENV === 'development' ? `${process.env.HOST}:${process.env.PORT}` : process.env.HOST;

module.exports = {
  SITE_URL,
  publicDir,
};
