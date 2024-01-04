import { Router } from "express";
import UsuarioRoutes from "./usuarioRoutes"
import ProdutoRoutes from "./produtoRoutes"

const routes = Router()

routes.use(UsuarioRoutes)
routes.use(ProdutoRoutes)

export default routes