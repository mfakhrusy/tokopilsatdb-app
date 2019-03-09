const crypto = require('crypto');
const { isEmpty } = require('lodash');
const models = require('../modals').company;
const {
  checkUnique,
} = require('./utils');

const addCompany = async (companyName, companyUrl, themeColor, dateNow) => {
  const allId = await models.getAllId();
  const allCompanyId = await models.getAllCompanyId();
  const allCompanyName = await models.getAllCompanyName();
  const allCompanyUrl = await models.getAllCompanyUrl();

  if (!checkUnique(companyName, allCompanyName.map((item) => item.company_name))) {
    return { status: 409, message: 'company name already existed.' };
  }

  if (!checkUnique(companyUrl, allCompanyUrl.map((item) => item.company_url))) {
    return { status: 409, message: 'url already existed.' };
  }

  let companyId = generateCompanyId();
  while (!checkUnique(companyId, allCompanyId.map((item) => item.company_id))) {
    companyId = generateCompanyId();
  }

  if (isEmpty(themeColor)) {
    themeColor = '#828282';
  }

  const id = allId.length === 0 ? 1 : allId[allId.length - 1].id + 1;

  models.insertCompanyTable({
    id,
    company_id: companyId,
    company_name: companyName,
    company_url: companyUrl,
    theme_color: themeColor,
    creation_date: dateNow
  });

  return { status: 200, message: 'Company Added Successfully' };
};

const getCompanyList = async () => {
  const companyList = await models.getCompanyList();

  return { status: 200, message: 'Success get company list', data: companyList };
};

const getCompanyDetail = async (companyUrl) => {

  const companyDetail = await models.getCompanyDetail(companyUrl);

  if (isEmpty(companyDetail)) {
    return { status: 404, message: 'Company detail not found' };
  }

  return { status: 200, message: 'Success get company detail', data: companyDetail[0] };
};

// HELPERS FUNCTION

const generateCompanyId = () => {
  const companyId = crypto.randomBytes(16).toString('base64');
  return companyId;
};

module.exports = {
  addCompany,
  getCompanyList,
  getCompanyDetail,
};
