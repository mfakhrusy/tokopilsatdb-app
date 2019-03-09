const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();

const controllers = require('../controllers').auth;

router.post('/login', upload.none(), async (req, res) => {
  const {
    username,
    password
  } = req.body;

  const {
    status,
    message,
    data,
  } = await controllers.userLogin(username, password);

  res
    .status(status)
    .send({
      message,
      data,
    });
});

module.exports = router;
