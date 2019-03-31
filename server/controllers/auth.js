const { isEmpty } = require('lodash');
const models = require('../models').auth;
const userModels = require('../models').user;
const {
  generatePasswordHash,
  generateToken
} = require('./utils');

const userLogin = async (username, password) => {
  if (isEmpty(username) || isEmpty(password)) {
    return { status: 400, message: 'username/password cannot be empty' };
  }

  const userAuthDetail = await models.getUserAuthDetail(username);

  if (isEmpty(userAuthDetail)) {
    return { status: 404, message: 'username/password is wrong, user not found' };
  }

  const newPasswordHash = generatePasswordHash(password, userAuthDetail[0].salt);

  if (newPasswordHash !== userAuthDetail[0].password_hash) {
    return { status: 404, message: 'username/password is wrong, user not found' };
  }

  const userDetail = await userModels.getUserDetail(userAuthDetail[0].user_id);

  const token = generateToken({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

  return { status: 200, message: 'Successfully logged in', data: Object.assign({}, ...userDetail, { token }) };
};

module.exports = {
  userLogin
};
