const express = require('express');
const router = express.Router();

const controllers = require('../controllers').company;

router.put('/add', async (req, res) => {
  const {
    company_name: companyName,
    company_url: companyUrl,
    theme_color: themeColor, //  can be empty/undefined
  } = req.body;
  const dateNow = new Date();

  const addCompany = await controllers.addCompany(companyName, companyUrl, themeColor, dateNow);
  res.status(addCompany.status).send({ message: addCompany.message });
});

router.get('/list', async (req, res) => {
  const { data, message, status } = await controllers.getCompanyList();

  res
    .status(status)
    .send({
      message,
      data,
    });
});

router.get('/', async (req, res) => {
  res
    .status(400)
    .send({
      error: true,
      message: 'company_url cannot be empty',
    });
});

router.get('/:company_url', async (req, res) => {
  const { company_url: companyUrl } = req.params;
  const { data, message, status } = await controllers.getCompanyDetail(companyUrl);

  res
    .status(status)
    .send({
      message,
      data,
    });
});

module.exports = router;
