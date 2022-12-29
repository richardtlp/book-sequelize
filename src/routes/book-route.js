const { Router } = require('express')
const {
  getBooksHandler,
  getABookHandler,
  insertABookHandler,
  updatedABookHandler,
  deleteABookHandler,
} = require('../controllers/book-controller')

const router = Router()

router.get('/', getBooksHandler)
router.get('/:id', getABookHandler)
router.post('/', insertABookHandler)
router.put('/:id', updatedABookHandler)
router.delete('/:id', deleteABookHandler)

module.exports = {
  BookRouter: router,
}
