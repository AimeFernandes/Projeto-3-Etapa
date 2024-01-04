import { deletarUsuarioService } from "../services/deletarUsuarioService";
import { Request, Response } from "express"

export class deletarUsuarioController {
    constructor(private readonly service: deletarUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        await this.service.execute(Number(id))
        return response.json({ message: "Usuário removido" })
    }
}