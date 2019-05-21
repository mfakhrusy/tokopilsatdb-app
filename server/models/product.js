const db = require('./db');
const utils = require('./utils');
const tableName = 'store_product';

const getAllId = () => {
  return utils.getColumnFromTable('id', tableName);
};

const getAllProductId = () => {
  return utils.getColumnFromTable('product_id', tableName);
};

const getAllFilename = () => {
  return utils.getColumnFromTable('file_name', tableName);
};

const getAllProductByCollectionId = (collectionId) => {
  return utils.getColumnsFromTable(
    [
      'product_id',
      'product_name',
      'product_description',
      'price',
      'file_name',
      'image_url',
      'creation_date'
    ],
    tableName,
    { row: 'collection_id', value: collectionId },
  );
};

const getProductList = () => {
  return utils.getColumnsFromTable(
    [
      'collection_id',
      'product_id',
      'product_name',
      'product_description',
      'price',
      'file_name',
      'image_url',
      'creation_date',
    ],
    tableName,
    null
  );
};

const countProductByCollectionId = async (collectionId) => {
  try {
    const result = await db.one(`SELECT count(*) FROM ${tableName} WHERE collection_id = $1`, [collectionId], res => Number(res.count));
    return result;
  } catch(e) {
    return { status: 'error', error: true, message: 'Failed to fetch from table' };
  }
};

const insertProductTable = (values) => {
  utils.insertTableAll(values, tableName);
};

module.exports = {
  getAllId,
  getAllProductId,
  getAllFilename,
  getAllProductByCollectionId,
  insertProductTable,
  countProductByCollectionId,
  getProductList,
};
