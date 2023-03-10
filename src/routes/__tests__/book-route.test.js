const { BookRouter } = require('../book-route')

describe('test book routes', () => {
  const routes = [
    { path: '/', method: 'get' },
    { path: '/:id', method: 'get' },
    { path: '/', method: 'post' },
    { path: '/:id', method: 'put' },
    { path: '/:id', method: 'delete' },
  ]

  it.each(routes)('`$method` exists on $path', (route) => {
    expect(BookRouter.stack.some((layer) => Object.keys(layer.route.methods).includes(route.method))).toBe(true)
    expect(BookRouter.stack.some((layer) => layer.route.path === route.path)).toBe(true)
  })
})
