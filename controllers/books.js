const Books = require('../models/books');

class booksControllers {
  static async RegisterBooks(document) {
    const books = await Books.create(document)
    return books
  };

  static async getBooks() {
    const books = await Books.findOne({})
    return books
  };

  static async updateBooks(document, id) {
  const books =   await Books.findOneAndUpdate({_id: id}, document, {new: true})
  return books
  };

  static async deleteBooks(id) {
  const books = await Books.findOneAndDelete({_id: id})
  return books
  }

};

module.exports = booksControllers;
