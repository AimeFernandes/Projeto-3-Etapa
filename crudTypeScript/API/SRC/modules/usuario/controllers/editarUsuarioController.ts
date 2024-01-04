import { UsuarioDTO } from "../dtos/usuarioDTO";
import { editarUsuarioService } from "../services/editarUsuarioService";
import { Request, Response } from "express";

export class editarUsuarioController {
    constructor(private readonly service: editarUsuarioService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const data = <UsuarioDTO>request.body
        await this.service.execute(Number(id), data)
        return response.json({ message: "Usuário atualizado"})
    }
}
