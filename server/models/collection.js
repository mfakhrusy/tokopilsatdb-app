const db = require('./db');
const utils = require('./utils');
const productModels = require('./product');
const tableName = 'store_collection';

const getAllId = () => {
  return utils.getColumnFromTable('id', tableName);
};

const getAllCollectionId = () => {
  return utils.getColumnFromTable('collection_id', tableName);
};

const getAllFilename = () => {
  return utils.getColumnFromTable('file_name', tableName);
};

const getCollectionFilename = (filename) => {
  return utils.getColumnFromTable('file_name', tableName, filename);
};

const getIdByCollectionId = async (collectionId) => {
  try {
    const result = await db.any(`SELECT id FROM ${tableName} WHERE collection_id = $1`, [collectionId]);
    return result.map((item) => item.id);
  } catch(e) {
    console.log(e); // eslint-disable-line no-console
    return { status: 'error', error: true, message: 'Failed to fetch from table' };
  }
};

const updateItemsCountById = async (id) => {
  try {
    const productCountById = await productModels.countProductByCollectionId(id);
    await db.none(`UPDATE ${tableName} SET items_count = $1 WHERE id = $2`, [productCountById + 1, id]);
  } catch(e) {
    return { status: 'error', error: true, message: 'Failed to fetch from table' };
  }
};

const insertCollectionTable = (values) => {
  utils.insertTableAll(values, tableName);
};

const getCollectionList = () => {
  return utils.getColumnsFromTable(
    [
      'collection_id',
      'label',
      'file_name',
      'image_url',
      'items_count',
      'creation_date'
    ],
    tableName,
    null
  );
};

const getCollectionDetailByCollectionId = (collectionId) => {
  return utils.getColumnsFromTable(
    [
      'collection_id',
      'label',
      'file_name',
      'image_url',
      'items_count',
      'creation_date'
    ],
    tableName,
    { row: 'collection_id', value: collectionId },
  );
};


module.exports = {
  getAllId,
  getAllCollectionId,
  getAllFilename,
  getCollectionFilename,
  insertCollectionTable,
  getCollectionList,
  getIdByCollectionId,
  updateItemsCountById,
  getCollectionDetailByCollectionId,
};
