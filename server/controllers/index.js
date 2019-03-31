const user = require('./user');
const company = require('./company');
const auth = require('./auth');
const collection = require('./collection');
const product = require('./product');

module.exports = {
  user: { ...user },
  company: { ...company },
  auth: { ...auth },
  collection: { ...collection },
  product: { ...product },
};
