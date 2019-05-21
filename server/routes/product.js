const express = require('express');
const mkdirp = require('mkdirp');
const router = express.Router();
const multer  = require('multer');

const models = require('../models').product;
const controllers = require('../controllers').product;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const productDir = './public/files/img/product';

    // eslint-disable-next-line no-octal
    mkdirp(productDir, { mode: 0o2775 }, err => cb(err, productDir));
  },
  filename: async (req, file, cb) => {
    let allFilename = await models.getAllFilename();
    cb(null, await controllers.generateFilename(file.originalname, allFilename));
  }
});

const upload = multer({ storage });

router.post('/add', upload.single('file'), async (req, res) => {

  const dateNow = new Date();
  const { status, message } = await controllers.addProduct(req.file, req.body, dateNow);
  
  res.status(status).send({ message });
});

router.get('/', async (req, res) => {
  const { data, message, status } = await controllers.getProductList();

  res
    .status(status)
    .send({
      message,
      data,
    });
});

module.exports = router;
