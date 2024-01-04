import {
    createController,
    findOneController,
    findController,
    removeController,
    updateController,
    loginController
} from "../modules/usuario"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/cadastrarUsuario", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/listarUsuarios", (req: Request, res: Response) => {
    findController.handle(req, res)
})

routes.get("/listarUsuarioPorId/:id", (req: Request, res: Response) => {
    findOneController.handle(req, res)
})

routes.delete("/deletarUsuario/:id", (req: Request, res: Response) => {
    removeController.handle(req, res)
})

routes.put("/editarUsuario/:id", (req: Request, res: Response) => {
    updateController.handle(req, res)
})

routes.post("/login",(req: Request, res: Response) => {
    loginController.handle(req, res)
})

export default routes