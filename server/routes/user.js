const express = require('express');
const router = express.Router();

const controllers = require('../controllers').user;
const jwtMiddleware = require('../middleware/jsonwebtoken');

router.put('/add', async (req, res) => {
  const {
    username,
    email,
    password,
    first_name: firstName,
    last_name: lastName,
  } = req.body;
  const dateNow = new Date();

  const userAdd = await controllers.userAdd(username, email, password, firstName, lastName, dateNow);
  res.status(userAdd.status).send({ message: userAdd.message });
});

router.get('/', async (req, res) => {
  res
    .status(400)
    .send({
      message: 'user_id cannot be empty',
    });
});

router.get('/:user_id', jwtMiddleware, async (req, res) => {
  const { user_id: userId } = req.params;
  const { data, message, status } = await controllers.getUserDetail(userId);

  res
    .status(status)
    .send({
      message,
      data,
    });
});

module.exports = router;
