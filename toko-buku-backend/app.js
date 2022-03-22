'use strict'

// Init Env
require('dotenv').config();

//  Libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {router} = require('./Router/router');
// Init PORT
const PORT = process.env.PORT || 3000;

// Cors Setup
let originOptionCors = {
    origin: `http://localhost:${PORT}`
}

app.use(cors(originOptionCors));

// Routing

app.use('/', router);


// Port Connection
app.listen(PORT, () => console.log(`connect to server on port ${PORT}`))
