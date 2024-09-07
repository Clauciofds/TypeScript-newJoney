import { Router } from "express"
import AuthorContoller from "./src/controllers/author-controller"
import CategoryController from "./src/controllers/category-controller"
import PostController from "./src/controllers/post-controller"

const routes = Router()

routes.post('/authors', new AuthorContoller().create)
routes.get('/authors', new AuthorContoller().list)
routes.get('/authors/:id', new AuthorContoller().show)
routes.put('/authors/:id', new AuthorContoller().update)
routes.delete('/authors/:id', new AuthorContoller().delete)

routes.post('/authors/:id/profile', new AuthorContoller().createProfile)

routes.post('/categories', new CategoryController().create)

routes.post('/posts', new PostController().create)
routes.get('/posts', new PostController().list)

export default routes
