'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use( bodyParser.json());
app.use('/', require('./routes'));

app.listen(config.server.port, config.server.host, () => {
    console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
})