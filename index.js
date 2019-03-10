'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(bodyParser.urlencoded());
app.use( bodyParser.json());
app.use('/', require('./routes'));

app.listen(3001, 'localhost', () => {
    console.log('Server running at http://localhost:3001/');
})