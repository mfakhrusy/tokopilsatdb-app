const utils = require('./utils');

const getAllId = () => {
  return utils.getColumnFromTable('id', 'user_detail');
};

const getAllUserId = () => {
  return utils.getColumnFromTable('user_id', 'user_detail');
};

const getAllUsername = () => {
  return utils.getColumnFromTable('username', 'user_detail');
};

const getAllSalt = () => {
  return utils.getColumnFromTable('salt', 'user_detail');
};

const getAllEmail = () => {
  return utils.getColumnFromTable('email', 'user_detail', null);
};

const insertUserTable = (values) => {
  utils.insertTableAll(values, 'user_detail');
};

const getUserDetail = (userId) => {
  return utils.getColumnsFromTable(
    [
      'user_id',
      'username',
      'email',
      'first_name',
      'last_name',
      'avatar_url',
      'creation_date'
    ],
    'user_detail',
    { row: 'user_id', value: userId}
  );
};

module.exports = {
  getAllId,
  getAllEmail,
  getAllSalt,
  getAllUserId,
  getAllUsername,
  insertUserTable,
  getUserDetail,
};