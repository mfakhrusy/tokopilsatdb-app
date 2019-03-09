const user = require('./user');
const company = require('./company');
const auth = require('./auth');
const collection = require('./collection');

module.exports = {
  user: { ...user },
  company: { ...company },
  auth: { ...auth },
  collection: { ...collection },
};
