const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db.init');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes'));

app.listen(3001, () => {
    console.log('Server working at localhost:3001');
})