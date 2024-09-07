import { Router } from "express"
import AuthorContoller from "./src/author-controller"

const routes = Router()

routes.post('/authors', new AuthorContoller().create)
routes.get('/authors', new AuthorContoller().list)
routes.get('/authors/:id', new AuthorContoller().show)
routes.put('/authors/:id', new AuthorContoller().update)
routes.delete('/authors/:id', new AuthorContoller().delete)

export default routes
