const BookService = require('../services/book-service')

const getBooksHandler = async (_, res) => {
  const books = await BookService.getBooks()
  res.status(200).json(books)
}

const getABookHandler = async (req, res) => {
  const book = await BookService.getABook(parseInt(req.params.id, 10))
  res.status(200).json(book)
}

const insertABookHandler = async (req, res) => {
  const book = await BookService.insertABook(req.body)
  res.status(201).json(book)
}

const updatedABookHandler = async (req, res) => {
  const book = await BookService.updateABook(parseInt(req.params.id), req.body)
  res.status(200).json(book)
}

const deleteABookHandler = (req, res) => {
  BookService.deleteABook(parseInt(req.params.id))
  res.status(204).json()
}

module.exports = {
  getBooksHandler,
  getABookHandler,
  insertABookHandler,
  updatedABookHandler,
  deleteABookHandler,
}
