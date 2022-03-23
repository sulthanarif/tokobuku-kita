'use strict'
const express = require('express');
const bookRouter = express.Router();

// controller
const {
    BookController
} = require('../Controller/bookController'); 

// endpoin home
bookRouter.get('/', BookController.findAllBooks);
// endpoint by ID
bookRouter.get(`/:id`, BookController.findBookById);
//  endpoint post 



module.exports = {
    bookRouter
};