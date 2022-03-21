'use strict' 
const express = require('express');
const { BookController } = require('../Controller/bookController');
const bookRouter = express.Router();

// controller

// endpoin home
bookRouter.get('/', BookController.findAllBooks
);

module.exports ={bookRouter};