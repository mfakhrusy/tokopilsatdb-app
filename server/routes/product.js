const express = require('express');
const mkdirp = require('mkdirp');
const router = express.Router();
const multer  = require('multer');

const controllers = require('../controllers').product;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const productDir = './public/files/img/product';

    mkdirp(productDir, err => cb(err, productDir));
  },
  filename: async (req, file, cb) => {
    cb(null, await controllers.generateFilename(file.originalname));
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
