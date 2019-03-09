const crypto = require('crypto');
const uuidv5 = require('uuid/v5'); // generate sha-1 from unique name (hash)
const modals = require('../modals').user;
const { isEmpty } = require('lodash');
const { UUID_NAMESPACE, MIN_USERNAME_LENGTH } = require ('../utils/constants');
const {
  checkUnique,
  generatePasswordHash,
  regexUuid
} = require('./utils');

const userAdd = async (username, email, password, firstName, lastName, dateNow) => {
  const allId = await modals.getAllId();
  const allUsername = await modals.getAllUsername();
  const allEmail = await modals.getAllEmail();
  const allSalt = await modals.getAllSalt();

  if (!checkUnique(username, allUsername.map((item) => item.username))) {
    return { status: 409, message: 'Username already existed.' };
  }

  if (username.length < MIN_USERNAME_LENGTH) {
    return { status: 400, message: 'Minimum username length is 6 character' };
  }

  if (!checkUnique(email, allEmail.map((item) => item.email))) {
    return { status: 409, message: 'Email already existed.' };
  }

  let salt = generateSalt();
  while (!checkUnique(salt, allSalt.map((item) => item.salt))) {
    salt = generateSalt();
  }
  const userId = generateUserId(username);
  const passwordHash = generatePasswordHash(password, salt);
  const id = allId.length === 0 ? 1 : allId[allId.length - 1].id + 1;

  modals.insertUserTable({
    id,
    user_id: userId,
    username,
    email,
    salt,
    password_hash: passwordHash,
    first_name: firstName || `User-${id}`,
    last_name: lastName || '',
    avatar_url: '', // todo change this
    creation_date: dateNow,
  });

  return { status: 200, message: 'User Added Successfully' };
};

const getUserDetail = async (userId) => {

  const userDetail = await modals.getUserDetail(userId);

  if (isEmpty(userDetail)) {
    return { status: 404, message: 'User detail not found' };
  }

  // const regexUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!regexUuid.test(userId)) {
    return { status: 400, message: 'Not a valid user_id', error: true };
  }

  return { status: 200, message: 'Success get user detail', data: userDetail[0] };
};

const generateUserId = (username) => {
  let userId = uuidv5(username, UUID_NAMESPACE);
  return userId;
};

const generateSalt = () => {
  const salt = crypto.randomBytes(16).toString('base64');
  return salt;
};

module.exports = {
  userAdd,
  getUserDetail,
};
