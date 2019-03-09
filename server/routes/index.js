const express = require('express');
const router = express.Router();

const userRoute = require('./user');
const companyRoute = require('./company');
const collectionRoute = require('./collection');
const productRoute = require('./product');

router.use('/user', userRoute);
router.use('/company', companyRoute);
router.use('/collection', collectionRoute);
router.use('/product', productRoute);

module.exports = router;
