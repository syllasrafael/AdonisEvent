/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import AuthController from 'App/Controllers/Http/AuthController'
import ProvincesController from 'App/Controllers/Http/ProvincesController'


Route.post('/login', async(ctx)=>{
  return new AuthController().login(ctx)
})

Route.group(() => {

  Route.group(() => {

    Route.get('/', async (ctx) => {
      return new AuthController().user(ctx)
    })

    Route.put('/', async (ctx) => {
      return new AuthController().update(ctx)
    })

    Route.post('/logout', async (ctx) => {
      return new AuthController().logout(ctx)
    })

  }).prefix('auth')



}).middleware('auth:api')


Route.post('/registration', async(ctx)=>{
    return new AuthController().registration(ctx)
})


Route.get('/', async () => {
  return { hello: 'world' }
})



Route.get('/provinces', async () => {
  return new ProvincesController().index()
})

Route.get('/provinces/:id', async (ctx) => {
  return new ProvincesController().show(ctx)
})

Route.post('/provinces', async (ctx) => {
  return new ProvincesController().store(ctx)
})

Route.put('/provinces/:id', async (ctx) => {
  return new ProvincesController().update(ctx)
})

Route.delete('/provinces/:id', async (ctx) => {
  return new ProvincesController().destroy(ctx)
})



Route.resource('municipalities', 'MunicipalitiesController').apiOnly()

Route.resource('categories', 'CategoriesController').apiOnly()
