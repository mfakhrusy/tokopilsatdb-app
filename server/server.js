'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');
const authRoutes = require('./routes/auth');
const db = require('./models/db');

const { publicDir } = require('./utils/config');

const app = express();
// constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(express.static(path.join(__dirname, publicDir)));
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// db initialization
db.connect()
  .then((obj) => {
    obj.done();
  })
  .catch((error) => {
    console.log('ERROR:', error.message || error);
  });

app.listen(PORT, HOST);
console.log(`running on http://${HOST}:${PORT}`);
