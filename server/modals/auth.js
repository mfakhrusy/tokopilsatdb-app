const utils = require('./utils');

const getUserAuthDetail = (username) => {
  return utils.getColumnsFromTable(
    [
      'user_id',
      'password_hash',
      'salt'
    ],
    'user_detail',
    { row: 'username', value: username}
  );
};

module.exports = {
  getUserAuthDetail,
};
