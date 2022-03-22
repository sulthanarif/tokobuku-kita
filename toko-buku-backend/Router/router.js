'use strict' 
const express = require('express');
const { Controller } = require('../Controller/controller');
const router = express.Router();
const {bookRouter} = require('./bookRouter');

// controller

// endpoin home
router.get('/', Controller.Homepage
);
router.use('/book', bookRouter);


module.exports ={router};