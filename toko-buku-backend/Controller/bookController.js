'use strict'

const {
    Book
} = require('../Model/Book');

class BookController {
    // find all books
    static findAllBooks(req, res) {
        Book.showAllBooks((err, data) => {
                if (err) {
                console.log('controller eror');
            } else {
                res.json(data);
                // console.log(`data`, data);
            }
        })

    }

    // find book by ID
    static findBookById (req,res){
        const {id}= req.params;
        Book.showBookById(id, (err, data) => {
            if (err){
                console.log(err);
            }
            else{
                res.json(data);
            }
        });
    }
    static createBook(req, res) {
        // res.send('create book');
        const payload = req.body;
        Book.createNewBook(payload, (err, data) => {
            if (err) {
                console.log(`controller error =>`,err);
            } else {
                res.json(data);
            }
        });

    }

}

module.exports = {
    BookController
};