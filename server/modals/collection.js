const utils = require('./utils');
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

module.exports = {
  getAllId,
  getAllCollectionId,
  getAllFilename,
  getCollectionFilename,
  insertCollectionTable,
  getCollectionList,
};
