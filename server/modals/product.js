const utils = require('./utils');
const tableName = 'store_product';

const getAllId = () => {
  return utils.getColumnFromTable('id', tableName);
};

const getAllProductId = () => {
  return utils.getColumnFromTable('product_id', tableName);
};

module.exports = {
  getAllId,
  getAllProductId,
};
