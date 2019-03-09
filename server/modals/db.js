const initOptions = {
  error(error, e) {
    if (e.cn) {
      console.log('CN:', e.cn); // eslint-disable-line no-console
      console.log('EVENT:', error.message || error); // eslint-disable-line no-console
    }
  }
};

const pgp = require('pg-promise')(initOptions);

const cn = {
  host: 'postgres', // postgres container name
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

const db = pgp(cn);

module.exports = db;
