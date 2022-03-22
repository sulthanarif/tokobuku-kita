'use strict'

const {
    Book
} = require('../Model/Book');

class BookController {
    static findAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
                if (err) {
                console.log('controller eror');
            } else {
                console.log(`data`, data);
            }
        })

    }
}

module.exports = {
    BookController
};