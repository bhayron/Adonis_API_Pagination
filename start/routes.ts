import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'api is runing' }
})

Route.get('/users', 'UsersController.index')
Route.get('/users/:id', 'UsersController.show')
Route.post('/users', 'UsersController.create')
Route.put('/users/:id', 'UsersController.update')
Route.delete('/users/:id', 'UsersController.delete')

// Route.get('/posts', 'PostsController.index')
// Route.post('/posts', 'PostsController.store')
// Route.get('/posts/:id', 'PostsController.show')
// Route.put('/posts/:id', 'PostsController.update')
// Route.delete('/posts/:id', 'PostsController.delete')

Route.resource('/posts', 'PostsController').apiOnly()
