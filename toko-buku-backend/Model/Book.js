'use strict'

/**
 * sql init from confif
 * class BOOK init
 */

const sql = require('../Config/db');

class Book {
    constructor(ID, book_label, book_title, book_author, book_genre, book_publisher, book_isbn, book_year, book_price, book_stock, created_at, update_at) {
        this.ID = ID;
        this.book_label = book_label;
        this.book_title = book_title;
        this.book_author = book_author;
        this.book_genre = book_genre;
        this.book_publisher = book_publisher;
        this.book_isbn = book_isbn;
        this.book_year = book_year;
        this.book_price = book_price;
        this.book_stock = book_stock;
        this.created_at = created_at;
        this.update_at = update_at;

    }
    
    static showAllBook(result) {
        /**
         * sql connection
         * query sql
         * get result
         * change to object instance
         */

        let sqlQuery = `select * from book`;
        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log(`this is eror =>`, err);
            } else {
                console.log('result', res);
            }
        })
    }

}

/**
 * static method 
 * show all book
 * show book by id
 * post new book
 * update book
 * 
 */


module.exports = {
    Book
};