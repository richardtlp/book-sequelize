const getBooks = async () => {
  return [
    {
      id: 1,
      name: 'Harry Porter',
      author: 'J K Rowling',
      genre: 'Fiction',
    },
    {
      id: 2,
      name: 'Dreamy Eyes',
      author: 'Nguyen Nhat Anh',
      genre: 'Fiction',
    },
  ]
}

const getABook = async (id) => {
  return {
    id,
    name: 'Harry Porter',
    author: 'J K Rowling',
    genre: 'Fiction',
  }
}

const insertABook = async (book) => {
  console.log('inserted book', book)
  return book
}

const updateABook = async (id, book) => {
  console.log('updated book', id, book)
  return book
}

const deleteABook = async (id, book) => {
  console.log('deleted book', id, book)
}

module.exports = {
  getBooks,
  getABook,
  insertABook,
  updateABook,
  deleteABook,
}
