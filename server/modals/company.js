const utils = require('./utils');
const tableName = 'company';

const getAllId = () => {
  return utils.getColumnFromTable('id', tableName);
};

const getAllCompanyId = () => {
  return utils.getColumnFromTable('company_id', tableName);
};

const getAllCompanyUrl = () => {
  return utils.getColumnFromTable('company_url', tableName);
};

const getAllCompanyName = () => {
  return utils.getColumnFromTable('company_name', tableName);
};

const insertCompanyTable = (values) => {
  utils.insertTableAll(values, tableName);
};

const getCompanyList = () => {
  return utils.getColumnsFromTable(
    [
      'company_id',
      'company_name',
      'company_url',
      'creation_date'
    ],
    tableName,
    null
  );
};

const getCompanyDetail = (companyUrl) => {
  return utils.getColumnsFromTable(
    [
      'company_id',
      'company_name',
      'company_url',
      'theme_color',
      'creation_date'
    ],
    tableName,
    { row: 'company_url', value: companyUrl}
  );
};

module.exports = {
  getAllId,
  getAllCompanyId,
  getAllCompanyUrl,
  getAllCompanyName,
  getCompanyList,
  getCompanyDetail,
  insertCompanyTable,
};
