"use strict";

/**
 * sql init from confif
 * class BOOK init
 */

const sql = require("../Config/db");

/**
 * static method
 * show all book
 * show book by ID
 * post new book
 * update book
 *
 */

// CLASS BOOK
class Book {
  constructor(
    ID,
    book_label,
    book_title,
    book_author,
    book_genre,
    book_publisher,
    book_isbn,
    book_year,
    book_price,
    book_stock,
    created_at,
    update_at
  ) {
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
  // find all books
  static showAllBooks(result) {
    /**
     * sql connection
     * query sql
     * get result
     * change to object instance
     */

    let sqlQuery = `SELECT * FROM book`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(`this is eror =>`, err);
        result(err, null);
      } else {
        let rawData = res;
        let books = [];
        let book;
        rawData.forEach((eachData) => {
          book = new Book(
            eachData.ID,
            eachData.book_label,
            eachData.book_title,
            eachData.book_author,
            eachData.book_genre,
            eachData.book_publisher,
            eachData.book_isbn,
            eachData.book_year,
            eachData.book_price,
            eachData.book_stock,
            eachData.created_at,
            eachData.update_at
          );
          books.push(book);
        });

        console.log("result", res);
        result(null, books);
      }
    });
  }

  // find book by ID
  static showBookById(ID, result) {
    let sqlQuery = `SELECT * FROM book WHERE ID = ${ID}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(`this is eror =>`, err);
        result(err, null);
      } else {
        let rawData = res;
        let books = [];
        let book;
        rawData.forEach((eachData) => {
          book = new Book(
            eachData.ID,
            eachData.book_label,
            eachData.book_title,
            eachData.book_author,
            eachData.book_genre,
            eachData.book_publisher,
            eachData.book_isbn,
            eachData.book_year,
            eachData.book_price,
            eachData.book_stock,
            eachData.created_at,
            eachData.update_at
          );
          books.push(book);
        });

        console.log(`result`, res);
        result(null, books);
      }
    });
  }
}

module.exports = {
  Book,
};
