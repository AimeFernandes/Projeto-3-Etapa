import { 
    createController,
    findOneController,
    findController,
    removeController,
    updateController
} from "../modules/produto"


import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/cadastrarProduto", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/listarProdutos", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.get("/listarProdutoPorId/:id", (req: Request, res: Response) => {
    findOneController.handle(req, res)
})

routes.delete("/deletarProduto/:id", (req: Request, res: Response) => {
    removeController.handle(req, res)
})

routes.put("/editarProduto/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

export default routes