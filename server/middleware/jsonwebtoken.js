const jwt = require('jsonwebtoken');
const { isEmpty } = require('lodash');
const secretKey = process.env.JWT_SECRET_KEY;

const withAuth = (req, res, next) => {
  const token = req.headers.token;

  if (isEmpty(token)) {
    res.status(401).send({ message: 'Unauthorized' });
  } else {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Unauthorized: token is expired' });
      } else {
        next();
      }
    });
  }
};

module.exports = withAuth;
