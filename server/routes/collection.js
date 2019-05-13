const express = require('express');
const mkdirp = require('mkdirp');
const router = express.Router();
const multer  = require('multer');
const models = require ('../models').collection;
const controllers = require('../controllers').collection;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const collectionDir = './public/files/img/collection';

    mkdirp(collectionDir, err => cb(err, collectionDir));
  },
  filename: async (req, file, cb) => {
    let allFilename = await models.getAllFilename();
    cb(null, await controllers.generateFilename(file.originalname, allFilename));
  }
});

const upload = multer({ storage });

router.post('/add', upload.single('file'), async (req, res) => {

  const dateNow = new Date();
  const { status, message } = await controllers.addCollection(req.file, req.body.label, dateNow);
  
  res.status(status).send({ message });
});

router.get('/', async (req, res) => {
  const { data, message, status } = await controllers.getCollectionList();

  res
    .status(status)
    .send({
      message,
      data,
    });
});

router.get('/:collectionId', async (req, res) => {
  const { collectionId } = req.params;

  const { data, message, status } = await controllers.getCollectionDetail(collectionId);

  res.status(status).send({
    data,
    message
  });
});

module.exports = router;
