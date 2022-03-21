'use strict' 
const express = require('express');
const { Controller } = require('../Controller/controller');
const router = express.Router();

// controller

// endpoin home
router.get('/', Controller.Homepage
);

module.exports ={router};