'use strict'
const express = require('express');
const bookRouter = express.Router();

// controller
const {
    BookController
} = require('../Controller/bookController'); 

// endpoin home
bookRouter.get('/', BookController.findAllBooks);

module.exports = {
    bookRouter
};