const BookService = require('../../services/book-service')
const {
  getBooksHandler,
  getABookHandler,
  insertABookHandler,
  updatedABookHandler,
  deleteABookHandler,
} = require('../book-controller')

const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() }

afterEach(() => {
  jest.clearAllMocks()
})

describe('test getBooksHandler', () => {
  it('should return list of books', async () => {
    const mockBookList = [
      {
        id: 1,
        name: 'Harry Porter',
        author: 'J K Rowling',
        genre: 'Fiction',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Mat Biec',
        author: 'Nguyen Nhat Anh',
        genre: 'Fiction',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
    jest.spyOn(BookService, 'getBooks').mockResolvedValue(mockBookList)
    await getBooksHandler({}, mockResponse)
    expect(mockResponse.status).toBeCalledWith(200)
    expect(mockResponse.json).toBeCalledWith(mockBookList)
  })
})

describe('test getABookHandler', () => {
  it('should return a book', async () => {
    const mockBook = {
      id: 1,
      name: 'Harry Porter',
      author: 'J K Rowling',
      genre: 'Fiction',
      created_at: new Date(),
      updated_at: new Date(),
    }
    jest.spyOn(BookService, 'getABook').mockResolvedValue(mockBook)
    await getABookHandler({ params: { id: '1' } }, mockResponse)
    expect(BookService.getABook).toBeCalledWith(1)
    expect(mockResponse.status).toBeCalledWith(200)
    expect(mockResponse.json).toBeCalledWith(mockBook)
  })
})

describe('test insertABookHandler', () => {
  it('should return the inserted book', async () => {
    const mockRequest = {
      body: {
        name: 'Kane and Abel',
        author: 'J K Rowling',
        genre: 'Fiction',
      },
    }
    const expected = {
      id: 3,
      name: 'Kane and Abel',
      author: 'J K Rowling',
      genre: 'Fiction',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    jest.spyOn(BookService, 'insertABook').mockResolvedValue(expected)
    await insertABookHandler(mockRequest, mockResponse)
    expect(BookService.insertABook).toBeCalledWith(mockRequest.body)
    expect(mockResponse.status).toBeCalledWith(201)
    expect(mockResponse.json).toBeCalledWith(expected)
  })
})

describe('test updateABookHandler', () => {
  it('should return the updated book', async () => {
    const mockRequest = {
      params: {
        id: '3',
      },
      body: {
        name: 'Kane and Abel',
        author: 'Jeffrey Archer',
        genre: 'Fiction',
      },
    }
    const expected = {
      id: 3,
      name: 'Kane and Abel',
      author: 'J K Rowling',
      genre: 'Fiction',
      createdAt: new Date(2022, 1, 1),
      updatedAt: new Date(),
    }
    jest.spyOn(BookService, 'updateABook').mockResolvedValue(expected)
    await updatedABookHandler(mockRequest, mockResponse)
    expect(BookService.updateABook).toBeCalledWith(3, mockRequest.body)
    expect(mockResponse.status).toBeCalledWith(200)
    expect(mockResponse.json).toBeCalledWith(expected)
  })
})

describe('test deleteABookHandler', () => {
  it('should return 204 on successful delete', async () => {
    BookService.deleteABook = jest.fn()
    await deleteABookHandler({ params: { id: '3' } }, mockResponse)
    expect(BookService.deleteABook).toBeCalledWith(3)
    expect(mockResponse.status).toBeCalledWith(204)
  })
})
